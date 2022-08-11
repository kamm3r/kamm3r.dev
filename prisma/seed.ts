import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projects = [
  {
    name: 'Medium Clone',
    tools: 'NextJS, Sanity CMS, TailwindCSS',
    image: '/medium.png',
    link: 'https://mediumclone-beta.vercel.app/',
  },
  {
    name: 'Pokedex',
    tools: 'NextJS, TailwindCSS',
    image: '/pokedex.png',
    link: 'https://ipokedex.vercel.app/',
  },
  {
    name: 'Portal',
    tools: 'Three.js',
    image: '/portal.png',
    link: 'https://portal-model.vercel.app/',
  },
  {
    name: 'Game',
    tools: 'Nextjs, TailwindCSS, Three.js',
    image: '/game.png',
    link: 'https://gallery-with-three.vercel.app/pageTwo',
  },
  {
    name: 'Series CRUD',
    tools: 'NextJS, TailwindCSS, Prisma',
    image: '/seriescrud.png',
    link: 'https://mk-next-prisma.vercel.app/',
  },
  {
    name: 'Concept',
    tools: 'Figma',
    image: '/concepts.png',
    link: 'https://www.figma.com/proto/Q0i7Tcf28ROQgiE902iZZk/ui-design?page-id=0%3A1&node-id=1%3A15',
  },
];

async function main() {
  const project = projects.map((p, i) => ({
    id: i,
    name: p.name,
    image: p.image,
    link: p.link,
  }));

  await prisma.project.createMany({
    data: project,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
