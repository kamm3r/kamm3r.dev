// src/server/trpc/router/index.ts
import { t } from '../utils';
import { newsletterRouter } from './newletter';
import { projectRouter } from './project';
import { viewsRouter } from './views';

export const appRouter = t.router({
  project: projectRouter,
  newsletter: newsletterRouter,
  views: viewsRouter,
});

export type AppRouter = typeof appRouter;
