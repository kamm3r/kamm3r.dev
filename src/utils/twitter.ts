// export type TweetRaw = {
//   id: string;
//   author_id: string;
//   created_at: string;
//   text: string;
//   author: User;
//   referenced_tweets?: {
//     id: string;
//     type: LinkedTweetType;
//   }[];
//   media?: Media[];
//   public_metrics?: {
//     reply_count: number;
//     retweet_count: number;
//     like_count: number;
//     quote_count: number;
//   };
//   entities?: {
//     urls?: Url[];
//     mentions?: {
//       start: number;
//       end: number;
//       username: string;
//       id: string;
//     }[];
//   };
//   attachments?: {
//     media_keys: string[];
//   };
// };

// type Url = {
//   start: number;
//   end: number;
//   url: string;
//   expanded_url: string;
//   display_url: string;
//   images?: {
//     url: string;
//     width: number;
//     height: number;
//   }[];
//   status?: number;
//   title?: string;
//   description?: string;
//   unwound_url?: string;
// };

// export type FormattedTweet = {
//   id: string;
//   text: string;
//   createdAt: string;
//   likeUrl: string;
//   retweetUrl: string;
//   replyUrl: string;
//   tweetUrl: string;
//   author: {
//     name: string;
//     authorUrl: string;
//     imageUrl: string;
//     username: string;
//     verified: boolean;
//   };
//   metrics: {
//     replies: string;
//     retweets: string;
//     likes: string;
//     quotes: string;
//   };
//   quoteTweet?: FormattedTweet;
//   linkPreview?: Url;
//   type?: LinkedTweetType;
//   media?: Media[];
// };

// type LinkedTweetType = 'retweeted' | 'quoted' | 'replied_to';

// // https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
// type User = {
//   id: string;
//   name: string;
//   profile_image_url: string;
//   username: string;
//   protected: boolean;
//   verified: boolean;
// };

// // https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
// type Media = {
//   media_key: string;
//   height: number;
//   width: number;
//   url: string;
//   preview_image_url: string;
//   type: 'animated_gif' | 'photo' | 'video';
//   alt_text?: string;
// };

// type Includes = {
//   users: User[];
//   media: Media[];
//   tweets: TweetRaw[];
// };

// type ApiResponse = {
//   data: TweetRaw[];
//   includes: Includes;
//   errors?: any[];
// };

// export const getTweets = async (ids: string[]) => {
//   if (ids.length === 0) return [];

//   const queryParams = new URLSearchParams({
//     ids: ids.join(','),
//     expansions:
//       'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
//     'tweet.fields':
//       'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
//     'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
//     'media.fields':
//       'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
//   });

//   const res = await fetch(`https://api.twitter.com/2/tweets?${queryParams}`, {
//     headers: {
//       Authorization: `Bearer ${process.env.TWITTER_API_KEY}`,
//     },
//   });

//   const tweets: ApiResponse = await res.json();

//   const getAuthorInfo = (author_id: string) => {
//     return tweets.includes.users.find((user: any) => user.id === author_id);
//   };

//   const getReferencedTweets = (includes: Includes, tweet: TweetRaw) => {
//     if (!tweet.referenced_tweets) {
//       return undefined;
//     }

//     let referencedTweets = [];

//     for (const referencedTweet of tweet.referenced_tweets) {
//       const tweet = includes.tweets.find(
//         (tweet) => tweet.id === referencedTweet.id
//       )!;

//       if (tweet) {
//         referencedTweets.push({
//           ...tweet,
//           type: referencedTweet.type,
//         });
//       }
//     }

//     return referencedTweets;
//     // return (
//     //   mainTweet?.referenced_tweets?.map((referencedTweet: any) => {
//     //     const fullReferencedTweet = tweets.includes.tweets.find(
//     //       (tweet: any) => tweet.id === referencedTweet.id
//     //     );

//     //     return {
//     //       type: referencedTweet.type,
//     //       author: getAuthorInfo(fullReferencedTweet.author_id),
//     //       ...fullReferencedTweet,
//     //     };
//     //   }) || []
//     // );
//   };

//   return (
//     tweets.data.reduce((allTweets: any, tweet: any) => {
//       const tweetWithAuthor = {
//         ...tweet,
//         media:
//           tweet?.attachments?.media_keys.map((key: any) =>
//             tweets.includes.media.find((media: any) => media.media_key === key)
//           ) || [],
//         referenced_tweets: getReferencedTweets(tweet.includes, tweet),
//         author: getAuthorInfo(tweet.author_id),
//       };

//       return [tweetWithAuthor, ...allTweets];
//     }, []) || [] // If the Twitter API key isn't set, don't break the build
//   );
// };

import { format, isThisYear } from 'date-fns';
import { encode } from 'qss';

export const formatShortDate = (date: string) => {
  const _date = new Date(date);

  return isThisYear(_date)
    ? format(_date, 'h:mm a - MMM d, y')
    : format(_date, 'h:mm a - MMM d, y');
};

export type TweetRaw = {
  id: string;
  author_id: string;
  created_at: string;
  text: string;
  author: User;
  referenced_tweets?: {
    id: string;
    type: LinkedTweetType;
  }[];
  media?: Media[];
  public_metrics?: {
    reply_count: number;
    retweet_count: number;
    like_count: number;
    quote_count: number;
  };
  entities?: {
    urls?: Url[];
    mentions?: {
      start: number;
      end: number;
      username: string;
      id: string;
    }[];
  };
  attachments?: {
    media_keys: string[];
  };
};

type Url = {
  start: number;
  end: number;
  url: string;
  expanded_url: string;
  display_url: string;
  images?: {
    url: string;
    width: number;
    height: number;
  }[];
  status?: number;
  title?: string;
  description?: string;
  unwound_url?: string;
};

export type FormattedTweet = {
  id: string;
  text: string;
  createdAt: string;
  likeUrl: string;
  retweetUrl: string;
  replyUrl: string;
  tweetUrl: string;
  author: {
    name: string;
    authorUrl: string;
    imageUrl: string;
    username: string;
    verified: boolean;
  };
  metrics: {
    replies: string;
    retweets: string;
    likes: string;
    quotes: string;
  };
  quoteTweet?: FormattedTweet;
  linkPreview?: Url;
  type?: LinkedTweetType;
  media?: Media[];
};

type LinkedTweetType = 'retweeted' | 'quoted' | 'replied_to';

// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
type User = {
  id: string;
  name: string;
  profile_image_url: string;
  username: string;
  protected: boolean;
  verified: boolean;
};

// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
type Media = {
  media_key: string;
  height: number;
  width: number;
  url: string;
  preview_image_url: string;
  type: 'animated_gif' | 'photo' | 'video';
  alt_text?: string;
  variants: Video[];
};

type Video = {
  bit_rate: number;
  content_type: string;
  url: string;
};

type Includes = {
  users: User[];
  media: Media[];
  tweets: TweetRaw[];
};

type ApiResponse = {
  data: TweetRaw[];
  includes: Includes;
  errors?: any[];
};

const getAuthor = (users: User[], author_id: string | undefined) => {
  return users.find((user) => user.id === author_id)!;
};

const getMedia = (media: Media[], media_keys: string[] | undefined) => {
  if (!media || !media_keys) {
    return undefined;
  }

  let medias: Media[] = [];

  media_keys.forEach((key) => {
    const _media = media.find((media) => media.media_key === key);

    if (_media) {
      medias.push(_media);
    }
  });

  return medias;
};

const getReferencedTweets = (includes: Includes, tweet: TweetRaw) => {
  if (!tweet.referenced_tweets) {
    return undefined;
  }

  let referencedTweets = [];

  for (const referencedTweet of tweet.referenced_tweets) {
    const tweet = includes.tweets.find(
      (tweet) => tweet.id === referencedTweet.id
    )!;

    if (tweet) {
      referencedTweets.push({
        ...tweet,
        type: referencedTweet.type,
      });
    }
  }

  return referencedTweets;
};

const replaceBetween = (
  origin: string,
  startIndex: number,
  endIndex: number,
  insertion: string
) => origin.substring(0, startIndex) + insertion + origin.substring(endIndex);

const getStartEnd = (str: string, sub: string) => [
  str.indexOf(sub),
  str.indexOf(sub) + sub.length,
];

const formatTweet = (
  includes: Includes,
  tweet: TweetRaw & { type?: LinkedTweetType }
) => {
  let textFormatted = tweet.text;

  if (tweet.entities?.urls) {
    for (const url of tweet.entities.urls) {
      let replacement = url.display_url;
      if (
        (url.status && tweet.text.endsWith(url.url)) ||
        (tweet.text.endsWith(url.url) &&
          url.display_url.startsWith('pic.twitter.com/')) ||
        tweet.referenced_tweets?.find(
          (x) => x.type === 'quoted' && url.expanded_url.endsWith(x.id)
        )
      ) {
        replacement = '';
      }

      const [start, end] = getStartEnd(textFormatted, url.url);

      textFormatted = replaceBetween(textFormatted, start!, end!, replacement);
    }
  }

  const author = getAuthor(includes.users, tweet.author_id);
  const media = getMedia(includes.media, tweet.attachments?.media_keys);

  const createdAtFormatted = formatShortDate(tweet.created_at);

  const metricsFormatted = {
    replies: tweet.public_metrics?.reply_count
      ? tweet.public_metrics.reply_count.toString()
      : '0',
    retweets: tweet.public_metrics?.retweet_count
      ? tweet.public_metrics.retweet_count.toString()
      : '0',
    likes: tweet.public_metrics?.like_count
      ? tweet.public_metrics.like_count.toString()
      : '0',
    quotes: tweet.public_metrics?.quote_count
      ? tweet.public_metrics.quote_count.toString()
      : '0',
  };

  const formattedTweet: FormattedTweet = {
    id: tweet.id,
    author: {
      name: author.name,
      imageUrl: author.profile_image_url,
      authorUrl: `https://twitter.com/${author.username}`,
      username: author.username,
      verified: author.verified,
    },
    text: textFormatted.trim(),
    createdAt: createdAtFormatted,
    metrics: metricsFormatted,
    likeUrl: `https://twitter.com/intent/like?tweet_id=${tweet.id}`,
    retweetUrl: `https://twitter.com/intent/retweet?tweet_id=${tweet.id}`,
    replyUrl: `https://twitter.com/intent/tweet?in_reply_to=${tweet.id}`,
    tweetUrl: `https://twitter.com/${author.username}/status/${tweet.id}`,
    ...(media ? { media } : {}),
    ...(tweet.type ? { type: tweet.type } : {}),
  };

  return formattedTweet;
};

export const getTweets = async (ids: string[]) => {
  if (ids.length === 0) return [];

  const queryParams = encode({
    ids: ids.join(','),
    expansions: [
      'author_id',
      'attachments.media_keys',
      'referenced_tweets.id',
      'referenced_tweets.id.author_id',
    ].join(','),
    'tweet.fields': [
      'id',
      'author_id',
      'created_at',
      'text',
      'attachments',
      'in_reply_to_user_id',
      'public_metrics',
      'referenced_tweets',
      'entities',
    ].join(','),
    'user.fields': [
      'id',
      'name',
      'profile_image_url',
      'protected',
      'username',
      'verified',
    ].join(','),
    'media.fields': [
      'media_key',
      'type',
      'height',
      'width',
      'url',
      'preview_image_url',
      'alt_text',
      'variants',
    ].join(','),
  });

  const api: ApiResponse = await fetch(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  const data = await api.data;

  let tweets: FormattedTweet[] = [];

  for (const tweet of data) {
    const formattedTweet = formatTweet(api.includes, tweet);
    const referencedTweets = getReferencedTweets(api.includes, tweet);
    const quoteTweet = referencedTweets?.find((t) => t.type === 'quoted');
    const linkPreview = tweet.entities?.urls?.find(
      (x) => x.status === 200 && tweet.text.endsWith(x.url)
    );

    tweets.push({
      ...formattedTweet,
      ...(linkPreview ? { linkPreview } : {}),
      ...(quoteTweet
        ? { quoteTweet: formatTweet(api.includes, quoteTweet) }
        : {}),
    });
  }

  return tweets;
};