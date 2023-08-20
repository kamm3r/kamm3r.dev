import rss from '@astrojs/rss';
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content';
import { sortPostByDate } from '../utils/date';

export async function get(context:APIContext) {
	const posts = sortPostByDate(await getCollection('blog'));
	return rss({
		title: 'Marco Kammer - Developer, writer, creator.',
		description: 'writing about tech and design' ,
		site: String(context.site),
		items: posts.map((post) => ({
			...post.data,
            pubDate: post.data.date,
			link: `/blog/${post.slug}/`,
		})),
	});
}
