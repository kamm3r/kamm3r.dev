// src/server/trpc/router/index.ts
import { t } from '../utils';

import { authRouter } from './auth';
import { newsletterRouter } from './newletter';
import { postRouter } from './post';

export const appRouter = t.router({
  post: postRouter,
  newsletter: newsletterRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
