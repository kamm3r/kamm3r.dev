import { getCollection } from 'astro:content'
import { sortPostByDate } from './date'

export async function getPublishedPosts() {
    return sortPostByDate(await getCollection('blog', ({ data }) => data.isDraft !== true))
}
