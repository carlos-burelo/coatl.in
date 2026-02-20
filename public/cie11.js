class DiagnosticAutocomplete extends HTMLElement {
  constructor() {
    super()
    this.selectedDiagnostics = new Map()
    this.searchResults = []
    this.activeIndex = -1
    this.searchTimeout = null
    this.requestController = null
    this.isLoading = false
    this.showDropdown = false
    this.cache = new Map()
    this.maxCacheSize = 100
    this.initialized = false
    this.savedCodes = []

    this.handleDocumentClick = this.handleDocumentClick.bind(this)
  }

  connectedCallback() {
    if (this.initialized) return
    this.initialized = true
    this.render()
    this.initElements()
    this.bindEvents()
    this.updateUI()
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleDocumentClick)
    if (this.requestController) {
      this.requestController.abort()
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
  }

  get minChars() {
    const value = parseInt(this.getAttribute('min-chars') || '1', 10)
    return Number.isNaN(value) ? 1 : value
  }

  get searchEndpoint() {
    return 'http://148.236.115.31:5000/search'
  }

  get label() {
    return this.getAttribute('label') || 'Diagnósticos'
  }

  get placeholder() {
    return this.getAttribute('placeholder') || 'Buscar diagnósticos...'
  }
  render() {
    if (!this.root) {
      this.root = this.attachShadow({ mode: 'open' })
    }

    this.root.innerHTML = `
      <style>
        :host {
          display: block;
          font: inherit;
          color: #111827;
        }

        .container {
          position: relative;
        }

        .label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .input-container {
          min-height: 120px;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: text;
        }

        .input-container:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }

        .search-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 16px;
          color: #111827;
          background: transparent;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .dropdown {
          position: absolute;
          z-index: 50;
          width: 100%;
          margin-top: 6px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
          max-height: 240px;
          overflow-y: auto;
        }

        .hidden {
          display: none;
        }

        .loading-indicator {
          position: absolute;
          right: 12px;
          top: 46px;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          border: 2px solid #dbeafe;
          border-bottom-color: #2563eb;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 2px 10px;
          background: #dbeafe;
          color: #1e40af;
          border-radius: 999px;
          font-size: 13px;
        }

        .chip-code {
          font-weight: 700;
        }

        .chip-divider {
          color: #60a5fa;
        }

        .chip-remove {
          margin-left: 4px;
          border: none;
          background: transparent;
          color: #1d4ed8;
          cursor: pointer;
          padding: 4px;
          border-radius: 999px;
        }

        .chip-remove:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 1px;
        }

        .option {
          width: 100%;
          padding: 12px 16px;
          text-align: left;
          border: none;
          background: #ffffff;
          border-bottom: 1px solid #f3f4f6;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .option:last-child {
          border-bottom: none;
        }

        .option:hover,
        .option:focus {
          background: #f3f4f6;
          outline: none;
        }

        .option.is-active {
          background: #dbeafe;
        }

        .result-code {
          font-weight: 700;
          color: #111827;
        }

        .result-title {
          margin-top: 4px;
          font-size: 13px;
          color: #6b7280;
        }

        .loading,
        .no-results {
          padding: 16px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }

        .loading-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        .actions {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .btn {
          appearance: none;
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-primary {
          background: #2563eb;
          color: #ffffff;
        }

        .btn-primary:hover:not(:disabled) {
          background: #1d4ed8;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: #4b5563;
          color: #ffffff;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #374151;
          box-shadow: 0 6px 16px rgba(55, 65, 81, 0.25);
          transform: translateY(-1px);
        }

        .saved-section {
          margin-top: 20px;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #bbf7d0;
          background: #ecfdf5;
        }

        .saved-title {
          margin: 0 0 12px;
          font-size: 16px;
          font-weight: 700;
          color: #065f46;
        }

        .saved-json {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 13px;
          color: #065f46;
          background: #d1fae5;
          padding: 12px;
          border-radius: 10px;
          overflow-x: auto;
          margin: 0;
        }

        .saved-count {
          margin-top: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #047857;
        }

        .hidden-section {
          display: none;
        }
      </style>

      <div class="container" id="combobox-container">
        <label for="search-input" class="label">
          ${this.label}
        </label>

        <div id="input-container"
          class="input-container"
          role="application" aria-label="Contenedor de diagnósticos seleccionados">
          <div id="selected-diagnostics" class="chips" role="list"
            aria-label="Diagnósticos seleccionados"></div>

          <input id="search-input" type="text" placeholder="${this.placeholder}"
            class="search-input" role="combobox"
            aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-describedby="search-help"
            autocomplete="off" spellcheck="false" />

          <div id="search-help" class="sr-only">
            Use las flechas arriba y abajo para navegar por los resultados, Enter para seleccionar, Escape para cerrar
          </div>
        </div>

        <div id="dropdown"
          class="dropdown hidden"
          role="listbox" aria-label="Resultados de búsqueda"></div>

        <div id="loading-indicator" class="loading-indicator hidden" aria-hidden="true">
          <div class="spinner"></div>
        </div>
      </div>

      <template id="diagnostic-chip-template">
        <span class="chip" role="listitem">
          <span class="chip-code diagnostic-code"></span>
          <span class="chip-divider">-</span>
          <span class="diagnostic-title"></span>
          <button type="button" class="chip-remove remove-btn" aria-label="Eliminar diagnóstico">
            <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      </template>

      <template id="dropdown-item-template">
        <button type="button" class="option" role="option" aria-selected="false">
          <div class="result-code"></div>
          <div class="result-title"></div>
        </button>
      </template>

      <template id="loading-template">
        <div class="loading" role="status" aria-live="polite">
          <div class="loading-row">
            <div class="spinner"></div>
            <span>Buscando diagnósticos...</span>
          </div>
        </div>
      </template>

      <template id="no-results-template">
        <div class="no-results" role="status">
          <p>No se encontraron resultados</p>
          <p>Intente con otros términos de búsqueda</p>
        </div>
      </template>

      <div class="actions" role="group" aria-label="Acciones de diagnóstico">
        <button id="save-btn" type="button" class="btn btn-primary" disabled aria-describedby="save-help">
          Guardar Diagnósticos
        </button>
        <button id="clear-btn" type="button" class="btn btn-secondary">
          Limpiar Todo
        </button>
        <div id="save-help" class="sr-only">
          Guarda los diagnósticos seleccionados actualmente
        </div>
      </div>

      <section id="saved-codes-section" class="saved-section hidden-section" role="region" aria-labelledby="saved-codes-title">
        <h3 id="saved-codes-title" class="saved-title">Códigos Guardados</h3>
        <pre id="saved-codes-json" class="saved-json"></pre>
        <div id="saved-codes-count" class="saved-count"></div>
      </section>
    `
  }

  initElements() {
    this.searchInput = this.root.querySelector('#search-input')
    this.dropdown = this.root.querySelector('#dropdown')
    this.comboboxContainer = this.root.querySelector('#combobox-container')
    this.selectedDiagnosticsContainer = this.root.querySelector('#selected-diagnostics')
    this.loadingIndicator = this.root.querySelector('#loading-indicator')
    this.inputContainer = this.root.querySelector('#input-container')
    this.saveBtn = this.root.querySelector('#save-btn')
    this.clearBtn = this.root.querySelector('#clear-btn')
    this.savedCodesSection = this.root.querySelector('#saved-codes-section')
    this.savedCodesJson = this.root.querySelector('#saved-codes-json')
    this.savedCodesCount = this.root.querySelector('#saved-codes-count')

    this.templates = {
      diagnosticChip: this.root.querySelector('#diagnostic-chip-template'),
      dropdownItem: this.root.querySelector('#dropdown-item-template'),
      loading: this.root.querySelector('#loading-template'),
      noResults: this.root.querySelector('#no-results-template')
    }
  }

  bindEvents() {
    this.searchInput.addEventListener('input', this.handleInputChange.bind(this))
    this.searchInput.addEventListener('keyup', this.handleInputChange.bind(this))
    this.searchInput.addEventListener('keydown', this.handleKeyDown.bind(this))
    this.searchInput.addEventListener('focus', this.handleFocus.bind(this))
    this.searchInput.addEventListener('blur', this.handleBlur.bind(this))

    this.inputContainer.addEventListener('click', this.handleContainerClick.bind(this))
    document.addEventListener('click', this.handleDocumentClick)
    this.saveBtn.addEventListener('click', this.handleSave.bind(this))
    this.clearBtn.addEventListener('click', this.handleClear.bind(this))
  }

  debounce(func, wait) {
    return (...args) => {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

  async searchDiagnostics(query) {
    const safeQuery = typeof query === 'string' ? query : ''
    const trimmedQuery = safeQuery.trim()

    if (!trimmedQuery || trimmedQuery.length < this.minChars) {
      this.searchResults = []
      this.renderDropdown()
      return
    }

    if (this.cache.has(trimmedQuery)) {
      this.searchResults = this.cache.get(trimmedQuery)
      this.renderDropdown()
      return
    }

    if (this.requestController) {
      this.requestController.abort()
    }

    this.requestController = new AbortController()
    this.setLoading(true)

    try {
      const response = await fetch(`${this.searchEndpoint}?q=${encodeURIComponent(trimmedQuery)}`, {
        signal: this.requestController.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const results = data.results || []

      const filteredResults = results.filter(
        result => !this.selectedDiagnostics.has(result.code)
      )

      this.searchResults = filteredResults
      this.cacheResults(trimmedQuery, filteredResults)

    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error searching diagnostics:', error)
        this.searchResults = []
      }
    } finally {
      this.setLoading(false)
      this.renderDropdown()
    }
  }

  cacheResults(query, results) {
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    this.cache.set(query, results)
  }

  setLoading(isLoading) {
    this.isLoading = isLoading
    this.loadingIndicator.classList.toggle('hidden', !isLoading)

    if (isLoading) {
      this.searchInput.setAttribute('aria-busy', 'true')
    } else {
      this.searchInput.removeAttribute('aria-busy')
    }
  }

  handleInputChange(e) {
    const value = e && e.target ? e.target.value : ''
    this.setShowDropdown(true)
    this.activeIndex = -1
    this.searchDiagnostics(value)
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        this.navigateDropdown(1)
        break
      case 'ArrowUp':
        e.preventDefault()
        this.navigateDropdown(-1)
        break
      case 'Enter':
        e.preventDefault()
        this.selectActiveItem()
        break
      case 'Escape':
        this.closeDropdown()
        break
      case 'Backspace':
        if (this.searchInput.value === '' && this.selectedDiagnostics.size > 0) {
          this.removeLastDiagnostic()
        }
        break
    }
  }

  navigateDropdown(direction) {
    if (this.searchResults.length === 0) return

    const newIndex = this.activeIndex + direction

    if (newIndex >= 0 && newIndex < this.searchResults.length) {
      this.activeIndex = newIndex
    } else if (direction > 0 && newIndex >= this.searchResults.length) {
      this.activeIndex = 0
    } else if (direction < 0 && newIndex < 0) {
      this.activeIndex = this.searchResults.length - 1
    }

    this.updateActiveItem()
    this.scrollToActiveItem()
    this.announceActiveItem()
  }

  updateActiveItem() {
    const items = this.dropdown.querySelectorAll('[role="option"]')
    items.forEach((item, index) => {
      const isActive = index === this.activeIndex
      item.setAttribute('aria-selected', isActive.toString())
      item.classList.toggle('is-active', isActive)
    })
  }

  scrollToActiveItem() {
    if (this.activeIndex < 0) return

    const activeItem = this.dropdown.querySelector('[aria-selected="true"]')
    if (!activeItem) return

    const dropdownRect = this.dropdown.getBoundingClientRect()
    const itemRect = activeItem.getBoundingClientRect()

    const isItemVisible = (
      itemRect.top >= dropdownRect.top &&
      itemRect.bottom <= dropdownRect.bottom
    )

    if (!isItemVisible) {
      const itemOffsetTop = activeItem.offsetTop
      const itemHeight = activeItem.offsetHeight
      const dropdownHeight = this.dropdown.clientHeight

      if (itemRect.top < dropdownRect.top) {
        this.dropdown.scrollTop = itemOffsetTop
      } else if (itemRect.bottom > dropdownRect.bottom) {
        this.dropdown.scrollTop = itemOffsetTop - dropdownHeight + itemHeight
      }
    }
  }

  handleContainerClick(e) {
    if (e.target.closest('.remove-btn')) {
      return
    }
    this.searchInput.focus()
  }

  handleDocumentClick(e) {
    const path = e.composedPath ? e.composedPath() : []
    if (!path.includes(this)) {
      this.setShowDropdown(false)
    }
  }

  announceActiveItem() {
    if (this.activeIndex >= 0 && this.searchResults[this.activeIndex]) {
      const item = this.searchResults[this.activeIndex]
      const announcement = `${item.code} - ${item.title}`

      const announcer = document.createElement('div')
      announcer.setAttribute('aria-live', 'assertive')
      announcer.setAttribute('aria-atomic', 'true')
      announcer.className = 'sr-only'
      announcer.textContent = announcement

      document.body.appendChild(announcer)
      setTimeout(() => document.body.removeChild(announcer), 1000)
    }
  }

  selectActiveItem() {
    if (this.activeIndex >= 0 && this.searchResults[this.activeIndex]) {
      this.selectDiagnostic(this.searchResults[this.activeIndex])
    }
  }

  handleFocus() {
    if (this.searchResults.length > 0) {
      this.setShowDropdown(true)
    }
  }

  handleBlur() {
    setTimeout(() => {
      const activeElement = this.root ? this.root.activeElement : null
      if (!activeElement || !this.dropdown.contains(activeElement)) {
        this.setShowDropdown(false)
      }
    }, 100)
  }

  selectDiagnostic(diagnostic) {
    this.selectedDiagnostics.set(diagnostic.code, diagnostic)
    this.searchInput.value = ''
    this.searchResults = []
    this.closeDropdown()
    this.searchInput.focus()
    this.renderSelectedDiagnostics()
    this.updateUI()
    this.announceSelection(diagnostic)
    this.emitChange()
  }

  announceSelection(diagnostic) {
    const announcement = `Diagnóstico agregado: ${diagnostic.code} - ${diagnostic.title}`

    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', 'polite')
    announcer.setAttribute('aria-atomic', 'true')
    announcer.className = 'sr-only'
    announcer.textContent = announcement

    document.body.appendChild(announcer)
    setTimeout(() => document.body.removeChild(announcer), 2000)
  }

  removeDiagnostic(codeToRemove) {
    const diagnostic = this.selectedDiagnostics.get(codeToRemove)
    this.selectedDiagnostics.delete(codeToRemove)
    this.renderSelectedDiagnostics()
    this.updateUI()
    this.searchInput.focus()

    if (diagnostic) {
      this.announceRemoval(diagnostic)
    }
    this.emitChange()
  }

  announceRemoval(diagnostic) {
    const announcement = `Diagnóstico eliminado: ${diagnostic.code} - ${diagnostic.title}`

    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', 'polite')
    announcer.setAttribute('aria-atomic', 'true')
    announcer.className = 'sr-only'
    announcer.textContent = announcement

    document.body.appendChild(announcer)
    setTimeout(() => document.body.removeChild(announcer), 2000)
  }

  removeLastDiagnostic() {
    const diagnostics = Array.from(this.selectedDiagnostics.values())
    if (diagnostics.length > 0) {
      const lastDiagnostic = diagnostics[diagnostics.length - 1]
      this.removeDiagnostic(lastDiagnostic.code)
    }
  }

  clear() {
    this.selectedDiagnostics.clear()
    this.searchInput.value = ''
    this.searchResults = []
    this.renderSelectedDiagnostics()
    this.updateUI()
    this.closeDropdown()
    this.emitChange()
  }

  emitChange() {
    const diagnoses = Array.from(this.selectedDiagnostics.values())
    const codes = diagnoses.map(d => d.code)
    this.dispatchEvent(new CustomEvent('diagnostics-change', {
      detail: { codes, diagnoses },
      bubbles: true,
      composed: true
    }))
  }

  setShowDropdown(show) {
    this.showDropdown = show
    const shouldShow = show && (this.searchResults.length > 0 || this.isLoading)

    this.dropdown.classList.toggle('hidden', !shouldShow)
    this.searchInput.setAttribute('aria-expanded', shouldShow.toString())
  }

  closeDropdown() {
    this.setShowDropdown(false)
    this.activeIndex = -1
  }

  renderSelectedDiagnostics() {
    const fragment = document.createDocumentFragment()

    for (const diagnostic of this.selectedDiagnostics.values()) {
      const chipElement = this.createDiagnosticChip(diagnostic)
      fragment.appendChild(chipElement)
    }

    this.selectedDiagnosticsContainer.replaceChildren(fragment)
  }

  createDiagnosticChip(diagnostic) {
    const template = this.templates.diagnosticChip.content.cloneNode(true)
    const chip = template.querySelector('span')

    chip.querySelector('.diagnostic-code').textContent = diagnostic.code
    chip.querySelector('.diagnostic-title').textContent = diagnostic.title

    const removeBtn = chip.querySelector('.remove-btn')
    removeBtn.setAttribute('aria-label', `Eliminar diagnóstico ${diagnostic.code}`)
    removeBtn.addEventListener('click', () => this.removeDiagnostic(diagnostic.code))

    return chip
  }

  renderDropdown() {
    if (!this.showDropdown) {
      this.dropdown.classList.add('hidden')
      return
    }

    const fragment = document.createDocumentFragment()

    if (this.isLoading) {
      const loadingElement = this.templates.loading.content.cloneNode(true)
      fragment.appendChild(loadingElement)
    } else if (this.searchResults.length === 0 && this.searchInput.value.trim().length >= this.minChars) {
      const noResultsElement = this.templates.noResults.content.cloneNode(true)
      fragment.appendChild(noResultsElement)
    } else {
      this.searchResults.forEach((result, index) => {
        const itemElement = this.createDropdownItem(result, index)
        fragment.appendChild(itemElement)
      })
    }

    this.dropdown.replaceChildren(fragment)
    this.setShowDropdown(this.searchResults.length > 0 || this.isLoading)

    if (this.activeIndex >= 0) {
      this.updateActiveItem()
    }
  }

  createDropdownItem(result) {
    const template = this.templates.dropdownItem.content.cloneNode(true)
    const button = template.querySelector('button')

    button.querySelector('.result-code').textContent = result.code
    button.querySelector('.result-title').textContent = result.title
    button.setAttribute('aria-label', `${result.code} - ${result.title}`)

    button.addEventListener('click', () => this.selectDiagnostic(result))

    return button
  }

  updateUI() {
    const count = this.selectedDiagnostics.size
    this.searchInput.setAttribute('aria-describedby',
      count > 0 ? 'search-help selected-count' : 'search-help'
    )
    this.saveBtn.disabled = count === 0
  }

  getSelectedCodes() {
    return Array.from(this.selectedDiagnostics.keys())
  }

  getSelectedDiagnostics() {
    return Array.from(this.selectedDiagnostics.values())
  }

  handleSave() {
    this.savedCodes = this.getSelectedCodes()
    this.renderSavedCodes()
    this.dispatchEvent(new CustomEvent('diagnostics-save', {
      detail: { codes: this.savedCodes },
      bubbles: true,
      composed: true
    }))
  }

  handleClear() {
    this.clear()
    this.hideSavedCodes()
    this.dispatchEvent(new CustomEvent('diagnostics-clear', {
      bubbles: true,
      composed: true
    }))
  }

  renderSavedCodes() {
    if (this.savedCodes.length > 0) {
      this.savedCodesJson.textContent = JSON.stringify(this.savedCodes, null, 2)
      this.savedCodesCount.textContent = `Total: ${this.savedCodes.length} diagnóstico${this.savedCodes.length !== 1 ? 's' : ''}`
      this.savedCodesSection.classList.remove('hidden-section')
    }
  }

  hideSavedCodes() {
    this.savedCodesSection.classList.add('hidden-section')
  }
}

customElements.define('diagnostic-autocomplete', DiagnosticAutocomplete)
