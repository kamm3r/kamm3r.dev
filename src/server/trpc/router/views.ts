import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { t } from '../utils';
import { prisma } from '../../db/client';

export const viewsRouter = t.router({
  addViews: t.procedure
    .input(z.object({ slug: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { slug } = input;
      const addViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      });

      // return { total: addViews.count.toString() };
      return addViews.count.toString();
    }),
  getViews: t.procedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input;
      const views = await prisma.views.findUnique({
        where: {
          slug,
        },
        select: { count: true },
      });
      return views?.count.toString();
    }),
  totalViews: t.procedure.query(async () => {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true,
      },
    });
    return totalViews._sum.count?.toString();
  }),
});
