import { z } from 'zod';
import { t } from '../utils';

const AddNewletter = z.object({
  email: z.string().email(),
});
export type AddNewletterType = z.infer<typeof AddNewletter>;

export const newsletterRouter = t.router({
  subscribe: t.procedure
    .input(AddNewletter)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.email.create({
        data: {
          email: input.email,
        },
      });
    }),
  allSubscriptions: t.procedure.query(async ({ ctx }) => {
    return ctx.prisma.email.findMany();
  }),
  delete: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      await ctx.prisma.email.delete({ where: { id } });
      return {
        id,
      };
    }),
});
