export function prettyDate(date: Date): string {
    return Intl.DateTimeFormat('en-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}