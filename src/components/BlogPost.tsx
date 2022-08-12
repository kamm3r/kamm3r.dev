import Link from 'next/link';
import useSWR from 'swr';

type Views = {
  total: number;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function BlogPost({
  slug,
  title,
  excerpt,
}: // views,
{
  slug: string;
  title: string;
  excerpt: string;
  // views: number;
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  // if (isLoading ) return <p>loading...</p>;

  return (
    <Link href={`/blog/${slug}`}>
      <a className='w-full'>
        <div className='w-full mb-8'>
          <div className='flex flex-col justify-between md:flex-row'>
            <h4 className='w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100'>
              {title}
            </h4>
            <p className='w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0'>
              {/* {`${views ? new Number(views).toLocaleString() : '–––'} views`} */}
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p>
          </div>
          <p className='text-gray-600 dark:text-gray-400'>{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
