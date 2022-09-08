import Link from 'next/link';
import { trpc } from '../utils/trpc';

function ViewCounter({ slug }: { slug: string }) {
  const { status, data, error } = trpc.views.getViews.useQuery({ slug });
  const views = new Number(data);

  if (status === 'loading') {
    return (
      <p className='w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0'>
        Loading...
      </p>
    );
  }

  if (status === 'error') {
    return (
      <p className='w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0'>
        Error: {error?.message}
      </p>
    );
  }

  return (
    <p className='w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0'>
      {' '}
      {`${views ? views.toLocaleString() : '–––'} views`}
    </p>
  );
}

export default function BlogPost({
  slug,
  title,
  excerpt,
}: {
  slug: string;
  title: string;
  excerpt: string;
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='w-full'>
        <div className='w-full mb-8'>
          <div className='flex flex-col justify-between md:flex-row'>
            <h4 className='w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100'>
              {title}
            </h4>
            <ViewCounter slug={slug} />
          </div>
          <p className='text-gray-600 dark:text-gray-400'>{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
