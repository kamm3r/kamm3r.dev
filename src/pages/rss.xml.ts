import rss from '@astrojs/rss';
import type { APIContext } from 'astro'
import { getPublishedPosts } from '../utils/posts';

export async function GET(context:APIContext) {
	const posts = await getPublishedPosts();
	return rss({
		title: 'Marco Kammer - Developer, writer, creator.',
		description: 'writing about tech and design' ,
		site: String(context.site),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}
