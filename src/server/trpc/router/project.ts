import { Prisma } from '@prisma/client';
import { t } from '../utils';
import { prisma } from '../../db/client';

const defaultProjectSelect = Prisma.validator<Prisma.ProjectSelect>()({
  id: true,
  name: true,
  image: true,
  link: true,
});

export const projectRouter = t.router({
  all: t.procedure.query(() => {
    return prisma.project.findMany({
      select: defaultProjectSelect,
    });
  }),
});
