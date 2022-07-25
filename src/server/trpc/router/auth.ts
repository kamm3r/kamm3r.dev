import { t, authedProcedure } from '../utils';

export const authRouter = t.router({
  me: authedProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma.user.findFirst({
      where: { id: ctx.session.user.id },
      select: { role: true },
    });
    return userResponse?.role;
  }),
  getSession: t.procedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: authedProcedure.query(() => {
    return 'You are logged in and can see this secret message!';
  }),
});
