export function prettyDate(date: Date): string {
    return Intl.DateTimeFormat('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

export function prettyShortDate(date: Date): string {
    return Intl.DateTimeFormat('es-MX', {
        month: 'short',
        day: 'numeric'
    }).format(date)
}