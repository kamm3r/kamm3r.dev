// src/server/trpc/router/index.ts
import { t } from '../utils';

import { authRouter } from './auth';
import { newsletterRouter } from './newletter';
import { postRouter } from './post';
import { projectRouter } from './project';
import { viewsRouter } from './views';

export const appRouter = t.router({
  post: postRouter,
  project: projectRouter,
  newsletter: newsletterRouter,
  auth: authRouter,
  views: viewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
