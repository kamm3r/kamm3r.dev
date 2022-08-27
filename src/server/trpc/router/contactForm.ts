import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { authedProcedure, t } from '../utils';
import { Prisma } from '@prisma/client';

const defaultContactSelect = Prisma.validator<Prisma.ContactSelect>()({
  id: true,
  name: true,
  email: true,
  message: true,
  createdAt: true,
});

export const contactRouter = t.router({
  // create
  add: authedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        title: z.string().min(1).max(32),
        excerpt: z.string().min(1),
        slug: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.create({
        data: input,
        select: defaultContactSelect,
      });
      return post;
    }),
  // read
  all: t.procedure.query(async ({ ctx }) => {
    return ctx.prisma.post.findMany({
      select: defaultContactSelect,
    });
  }),
});
