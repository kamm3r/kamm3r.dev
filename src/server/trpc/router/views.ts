import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { t } from '../utils';

export const viewsRouter = t.router({
  addViews: t.procedure
    .input(z.object({ slug: z.string() }))
    .mutation(async ({ ctx }) => {
      // const {slug} = input
      const slug = ctx.req.query.slug?.toString()!;
      const addViews = await ctx.prisma.views.upsert({
        where: { slug },
        update: {
          count: {
            increment: 1,
          },
        },
        create: {
          slug,
        },
      });

      return { total: addViews.count.toString() };
    }),
  getViews: t.procedure.query(async ({ ctx }) => {
    const slug = ctx.req.query.slug?.toString();
    const views = await ctx.prisma.views.findUnique({
      where: {
        slug,
      },
    });
    return { total: views?.count.toString() };
  }),
  totalViews: t.procedure.query(async ({ ctx }) => {
    const totalViews = await ctx.prisma.views.aggregate({
      _sum: {
        count: true,
      },
    });
    return { total: totalViews._sum.count?.toString() };
  }),
});
