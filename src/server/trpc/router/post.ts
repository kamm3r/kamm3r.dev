import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { authedProcedure, t } from '../utils';
import { Prisma } from '@prisma/client';

const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  excerpt: true,
  slug: true,
  createdAt: true,
  published: true,
});

export const postRouter = t.router({
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
      // if(!ctx.session.user.role === 'ADMIN') return ls
      const post = await ctx.prisma.post.create({
        data: input,
        select: defaultPostSelect,
      });
      return post;
    }),
  // read
  all: t.procedure.query(async ({ ctx }) => {
    return ctx.prisma.post.findMany({
      select: defaultPostSelect,
    });
  }),
  // get one
  byId: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const post = await ctx.prisma.post.findUnique({
        where: { id },
        select: defaultPostSelect,
      });
      if (!post) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${id}'`,
        });
      }
      return post;
    }),
  // update
  edit: authedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        data: z.object({
          title: z.string().min(1).max(32).optional(),
          excerpt: z.string().min(1).optional(),
          slug: z.string().optional(),
          published: z.boolean().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, data } = input;
      const post = await ctx.prisma.post.update({
        where: { id },
        data,
        select: defaultPostSelect,
      });
      return post;
    }),
  // delete
  delete: authedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      await ctx.prisma.post.delete({ where: { id } });
      return {
        id,
      };
    }),
});
