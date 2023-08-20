import type { CollectionEntry } from 'astro:content'

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

export function sortPostByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}
