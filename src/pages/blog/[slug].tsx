import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '../../components/BlogLayout';
import components from '../../components/MDXComponent';
import { Frame, Tweet } from '../../components/uiComponent';
import { getPostFromSlug, getSlugs, mdxToHtml, Post } from '../../utils/mdx';
import { FormattedTweet, getTweets } from '../../utils/twitter';

export default function PostPage({ post }: { post: Post }) {
  if (!post) return <h1>No Post Yet</h1>;

  const StaticTweet = ({
    id,
    showAttachments,
  }: {
    id: string;
    showAttachments?: boolean;
  }) => {
    const tweet = post.tweets?.find((tweet) => tweet.id === id);
    if (!tweet)
      return (
        <p>
          No Tweet was found by this ID or ur shit is broken{' '}
          {`this is ${post.tweets}`} {`this is ${tweet}`}
        </p>
      );

    return <Tweet showAttachments={showAttachments} {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={{ components, Frame, StaticTweet }}
      />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const post = getPostFromSlug(slug);

  if (!post) return { notFound: true };

  const { html, readingTime, tweetIDs } = await mdxToHtml(post.content);

  const tweets = await getTweets(tweetIDs);

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime,
        tweets,
      },
    },
  };
};
