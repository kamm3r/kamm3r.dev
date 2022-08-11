import { t } from '../utils';

export const projectRouter = t.router({
  all: t.procedure.query(async ({ ctx }) => {
    return ctx.prisma.project.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        link: true,
      },
    });
  }),
});
