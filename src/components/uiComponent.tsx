import Image, { ImageProps } from 'next/future/image';
import React from 'react';
import { format } from 'date-fns';
import { FormattedTweet } from '../utils/twitter';
import { HiBadgeCheck } from 'react-icons/hi';

// /**
//  * Supports plain text, images, quote tweets.
//  *
//  * Needs support for images, GIFs, and replies maybe?
//  * Styles use !important to override Tailwind .prose inside MDX.
//  */

// // interface ITweet {
// //   created_at: string;
// //   text: string;
// //   id: string;
// //   public_metrics?: {
// //     retweet_count: number;
// //     reply_count: number;
// //     like_count: number;
// //     quote_count: number;
// //   };
// //   author_id: string;
// //   media?: any[];
// //   referenced_tweets?: Array<{ id: string; type: string }>;
// //   author: {
// //     profile_image_url: string;
// //     verified: boolean;
// //     id: string;
// //     url: string;
// //     name: string;
// //     protected: boolean;
// //     username: string;
// //   };
// // }

// const BlurImage = (props: ImageProps) => {
//   const [isLoading, setLoading] = React.useState(true);

//   return (
//     <div
//       className={
//         `
//         relative flex overflow-hidden rounded-xl bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:border after:border-rose-200/10 after:content-['']` +
//         isLoading
//           ? 'animate-pulse'
//           : ''
//       }
//     >
//       <Image
//         {...props}
//         className={
//           'rounded-xl duration-700 ease-in-out' + isLoading
//             ? 'scale-[1.02] blur-xl grayscale'
//             : 'scale-100 blur-0 grayscale-0'
//         }
//         onLoadingComplete={() => setLoading(false)}
//       />
//     </div>
//   );
// };

// function TwitterIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       className={className}
//       viewBox='0 0 24 24'
//       fill='currentColor'
//     >
//       <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
//     </svg>
//   );
// }

// export const Tweet = ({
//   text,
//   author,
//   media,
//   createdAt,
//   metrics,
//   quoteTweet,
//   linkPreview,
//   type,
//   likeUrl,
//   replyUrl,
//   retweetUrl,
//   tweetUrl,
//   showAttachments = true,
// }: FormattedTweet & {
//   showAttachments?: boolean;
// }) => {
//   return (
//     <div className='rounded-2xl bg-white/5 p-6 shadow-surface-elevation-low'>
//       {/* Author meta */}
//       <div className='flex items-start text-lg'>
//         <div className='flex min-w-0 flex-wrap items-center'>
//           <a
//             href={author.authorUrl}
//             target='_blank'
//             rel='noopener noreferrer'
//             className='group flex items-center truncate'
//           >
//             <span className='mr-2 h-6 w-6 shrink-0'>
//               <Image
//                 alt={author.username}
//                 height={48}
//                 width={48}
//                 src={author.imageUrl}
//                 className='rounded-full'
//               />
//             </span>

//             <span
//               className='truncate font-medium text-rose-100/90 group-hover:text-rose-100 group-hover:underline group-hover:decoration-rose-100/20 group-hover:underline-offset-2'
//               title={author.name}
//             >
//               {author.name}
//             </span>

//             {author.verified ? (
//               <HiBadgeCheck className='ml-0.5 h-5 w-5 text-blue-400' />
//             ) : null}

//             <span
//               className='ml-1.5 text-rose-100/50'
//               title={`@${author.username}`}
//             >
//               @{author.username}
//             </span>
//           </a>

//           <span className='ml-1.5 text-rose-100/30'>&middot;</span>

//           <a
//             className='ml-1.5 text-rose-100/50 hover:text-rose-100/90 hover:underline hover:decoration-rose-100/20 hover:underline-offset-2'
//             href={tweetUrl}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             {createdAt}
//           </a>
//         </div>
//         {type !== 'quoted' ? (
//           <a
//             href={tweetUrl}
//             className='ml-auto mt-1 block pl-2 text-blue-400/90 hover:text-blue-500'
//           >
//             <TwitterIcon className='w-5' />
//           </a>
//         ) : null}
//       </div>

//       {/* Text */}
//       <div className='mt-2 whitespace-pre-wrap text-base text-rose-100/80'>
//         {text}
//       </div>

//       {/* Inline Media */}
//       {media && media.length ? (
//         <div className='mt-4'>
//           {media.map((m) => {
//             return (
//               <div key={m.media_key}>
//                 <BlurImage
//                   alt={m.alt_text}
//                   height={m.height}
//                   width={m.width}
//                   className='rounded-lg'
//                   src={m.preview_image_url || m.url}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       ) : null}

//       {/* QuoteTweet */}
//       {showAttachments && quoteTweet ? (
//         <div className='mt-4'>
//           <Tweet {...quoteTweet} />
//         </div>
//       ) : null}

//       {showAttachments && linkPreview ? (
//         <div className='mt-4 rounded-xl bg-white/[2%] p-3 shadow-surface-elevation-low'>
//           <div className='text-sm text-rose-100/50'>
//             {linkPreview.display_url.split('/')[0]}
//           </div>
//           <div className='text-base text-rose-100/70'>{linkPreview.title}</div>
//           <div className='text-base text-rose-100/50'>
//             {linkPreview.description}
//           </div>
//         </div>
//       ) : null}

//       {/* Actions */}
//       {!type ? (
//         <div className='mt-4 flex text-rose-100/50'>
//           <a
//             className='flex w-28 items-center text-rose-100/50 hover:underline hover:decoration-rose-100/30 hover:underline-offset-2'
//             href={replyUrl}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <svg className='mr-3 h-5 w-5 text-rose-100/20' viewBox='0 0 24 24'>
//               <path
//                 className='fill-current'
//                 d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z'
//               />
//             </svg>
//             <span className='text-sm'>{metrics.replies}</span>
//           </a>
//           <a
//             className='flex w-28 items-center text-rose-100/50 hover:underline hover:decoration-rose-100/30 hover:underline-offset-2'
//             href={retweetUrl}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <svg className='mr-3 h-5 w-5 text-rose-100/20' viewBox='0 0 24 24'>
//               <path
//                 className='fill-current'
//                 d='M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z'
//               />
//             </svg>
//             <span className='text-sm'>{metrics.retweets}</span>
//           </a>
//           <a
//             className='flex w-28 items-center text-rose-100/50 hover:underline hover:decoration-rose-100/30 hover:underline-offset-2'
//             href={likeUrl}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <svg className='mr-3 h-5 w-5 text-rose-100/20' viewBox='0 0 24 24'>
//               <path
//                 className='fill-current'
//                 d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z'
//               />
//             </svg>
//             <span className='text-sm'>{metrics.likes}</span>
//           </a>
//         </div>
//       ) : null}
//     </div>
//   );
// };

export const Tweet: React.FC<
  FormattedTweet & {
    showAttachments?: boolean;
  }
> = ({
  text,
  author,
  media,
  createdAt,
  metrics,
  quoteTweet,
  linkPreview,
  type,
  likeUrl,
  replyUrl,
  retweetUrl,
  tweetUrl,
  showAttachments = true,
}) => {
  //   const authorUrl = `https://twitter.com/${author.username}`;
  //   const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  //   const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  //   const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
  //   const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
  //   const createdAt = new Date(created_at);

  //   const formattedText = text
  //     ?.replace(/https:\/\/[\n\S]+/g, '')
  //     .replace('&amp;', '&');
  //   const quoteTweet =
  //     referenced_tweets && referenced_tweets.find((t) => t.type === 'quoted');

  return (
    <div className='flex flex-col tweet rounded-lg border border-gray-200 dark:border-gray-800 px-6 py-4 my-4 w-full bg-white dark:bg-gray-900'>
      <div className='flex items-center'>
        <a
          className='flex h-12 w-12'
          href={author.authorUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            alt={author.username}
            height={48}
            width={48}
            src={author.imageUrl}
            className='rounded-full'
          />
        </a>
        <a
          href={author.authorUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='author flex flex-col ml-4 !no-underline'
        >
          <span
            className='flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5'
            title={author.name}
          >
            {author.name}
            {author.verified ? (
              <svg
                aria-label='Verified Account'
                className='ml-1 text-blue-500 dark:text-white inline h-4 w-4'
                viewBox='0 0 24 24'
              >
                <g fill='currentColor'>
                  <path d='M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z' />
                </g>
              </svg>
            ) : null}
          </span>
          <span className='!text-gray-500' title={`@${author.username}`}>
            @{author.username}
          </span>
        </a>
        <a
          className='ml-auto'
          href={author.authorUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            viewBox='328 355 335 276'
            height='24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z'
              style={{ fill: '#3BA9EE' }}
            />
          </svg>
        </a>
      </div>
      <div className='mt-4 mb-1 leading-normal whitespace-pre-wrap  !text-gray-700 dark:!text-gray-200'>
        {text}
      </div>
      {media && media.length ? (
        <div
          className={
            media.length === 1
              ? 'inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2'
              : 'inline-grid grid-cols-2 grid-flow-dense gap-2 my-2'
          }
        >
          {media.map((m) =>
            m.type == 'photo' ? (
              <Image
                key={m.media_key}
                alt={text}
                height={m.height}
                width={m.width}
                src={m.url}
                className={
                  media.length === 1
                    ? 'rounded w-full h-full max-w-full object-cover'
                    : 'rounded w-full h-full max-w-full max-h-[140px] object-cover'
                }
              />
            ) : m.type === 'video' ? (
              <video
                key={m.media_key}
                autoPlay
                muted
                controls
                loop
                poster={m.preview_image_url}
                height={m.height}
                width={m.width}
                className='roundeds'
              >
                {m.variants.map((v, i) => (
                  <source key={i} src={v.url} type={v.content_type} />
                ))}
                <p className='text-sm text-gray-600 dark:text-gray-400 '>
                  Your browser doesn&#39;t support HTML video. Here is a{' '}
                  <a className='hover:underline' href={m.variants[0]?.url}>
                    link to the video
                  </a>{' '}
                  instead.
                </p>
              </video>
            ) : (
              <video
                key={m.media_key}
                autoPlay
                muted
                loop
                poster={m.preview_image_url}
                height={m.height}
                width={m.width}
                className='rounded w-full h-full my-0'
              >
                {m.variants.map((v, i) => (
                  <source key={i} src={v.url} type={v.content_type} />
                ))}
                <p className='text-sm text-gray-600 dark:text-gray-400 '>
                  Your browser doesn&#39;t support HTML video. Here is a{' '}
                  <a className='hover:!underline' href={m.variants[0]?.url}>
                    link to the video
                  </a>{' '}
                  instead.
                </p>
              </video>
            )
          )}
        </div>
      ) : null}

      {showAttachments && quoteTweet ? <Tweet {...quoteTweet} /> : null}
      <a
        className='!text-gray-500 text-sm hover:!underline'
        href={tweetUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <time title={`Time Posted: ${createdAt}`} dateTime={createdAt}>
          {createdAt}
        </time>
      </a>
      <div className='flex text-sm !text-gray-700 dark:!text-gray-300 mt-2'>
        <a
          className='flex items-center mr-4 !text-gray-500 hover:!text-blue-600 transition hover:!underline'
          href={replyUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='18' height='18' viewBox='0 0 24 24'>
            <path
              className='fill-current'
              d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z'
            />
          </svg>
          <span>
            {new Number(metrics.replies).toLocaleString('en', {
              notation: 'compact',
            })}
          </span>
        </a>
        <a
          className='flex items-center mr-4 !text-gray-500 hover:!text-green-600 transition hover:!underline'
          href={retweetUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='18' height='18' viewBox='0 0 24 24'>
            <path
              className='fill-current'
              d='M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z'
            />
          </svg>
          <span>
            {new Number(metrics.retweets).toLocaleString('en', {
              notation: 'compact',
            })}
          </span>
        </a>
        <a
          className='flex items-center !text-gray-500 hover:!text-red-600 transition hover:!underline'
          href={likeUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='18' height='18' viewBox='0 0 24 24'>
            <path
              className='fill-current'
              d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z'
            />
          </svg>
          <span>
            {new Number(metrics.likes).toLocaleString('en', {
              notation: 'compact',
            })}
          </span>
        </a>
      </div>
    </div>
  );
};

export function Frame(props: any) {
  return (
    <div className='relative overflow-hidden w-full pt-[56.25%]'>
      <iframe
        src={props.url}
        title='YouTube video player'
        frameBorder={0}
        loading='lazy'
        className='absolute top-0 left-0 border-0 w-full h-full aspect-video'
      ></iframe>
    </div>
  );
}
