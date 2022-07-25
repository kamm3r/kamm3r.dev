import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { projectData } from '../utils/project-data';

export default function MyWork() {
  return (
    // <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full z-10'>
    <section className='w-full'>
      <h2
        id='work'
        className='font-bold text-2xl md:text-4xl tracking-tight mb-6'
      >
        Featured Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {projectData.map((project, i) => (
          <Link key={i} href={project.link}>
            <Image
              className='w-full bg-[#404053] h-36 lg:h-72 object-cover'
              src={project.image}
              alt={project.name}
              width={1280}
              height={720}
            />
          </Link>
        ))}
      </div>
    </section>
    // </div>
  );
}
