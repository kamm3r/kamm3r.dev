// src/server/trpc/context.ts
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../db/client';

export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  const req = opts.req;
  const res = opts.res;

  return {
    prisma,
    req,
    res,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
