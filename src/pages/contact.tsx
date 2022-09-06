import Image from 'next/future/image';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Copy from '../components/Copy';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
        {/* <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 '> */}
        {/* <Form /> */}
        <div className='flex flex-col-reverse justify-center items-center sm:flex-row w-full'>
          <div className='flex flex-col pr-8'>
            <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-1 text-black dark:text-white'>
              {/* Let me know if you want to talk more */}
              Let me know if you are intrested to talk more
            </h3>
            <Copy />
          </div>
          <Link href='mailto:kamm3r@proton.me'>
            <a className='px-4 py-2 rounded text-black bg-white'>
              kamm3r@proton.me
            </a>
          </Link>

          {/* <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 '>
              <Image
                alt='Marco Kammer'
                height={176}
                width={176}
                src='/profile.jpg'
                sizes='30vw'
                priority
                className='rounded-full filter grayscale'
              />
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
}
