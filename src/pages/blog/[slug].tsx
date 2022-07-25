import type { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '../../components/BlogLayout';
import components from '../../components/MDXComponent';
import { mdxToHtml } from '../../utils/mdx';
import { getPostFromSlug, getSlugs, Post } from '../../utils/parseMdx';

export default function PostPage({ post }: { post: Post }) {
  if (!post) return <h1>No Post Yet</h1>;
  return (
    <BlogLayout post={post}>
      <MDXRemote {...post.content} components={{ ...components }} />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = getPostFromSlug(slug);

  if (!post) return { notFound: true };

  const { html, readingTime } = await mdxToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime,
      },
    },
  };
};
