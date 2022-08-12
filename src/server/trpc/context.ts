// src/server/trpc/context.ts
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { unstable_getServerSession as getServerSession } from 'next-auth';

import { authOptions as nextAuthOptions } from '../../pages/api/auth/[...nextauth]';
import { prisma } from '../db/client';

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const req = opts.req;
  const res = opts.res;
  const session = await getServerSession(req, res, nextAuthOptions);

  return {
    session,
    prisma,
    req,
    res,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
