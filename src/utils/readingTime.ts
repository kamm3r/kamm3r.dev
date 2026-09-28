const WORDS_PER_MINUTE = 220

export function readingTime(body: string | undefined): string {
    const words = (body ?? '')
        .replace(/^import .*$/gm, '')
        .replace(/<[^>]+>/g, '')
        .split(/\s+/)
        .filter(Boolean).length
    return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`
}
