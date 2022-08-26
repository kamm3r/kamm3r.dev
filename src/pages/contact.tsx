import Image from 'next/future/image';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Copy from '../components/Copy';

export default function Contact() {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 '>
          Contact Us
        </h1>
        <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 '>
          {/* <Form /> */}
          <div className='flex flex-col-reverse justify-between sm:flex-row items-start w-full'>
            <div className='flex flex-col pr-8'>
              <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-1 text-black dark:text-white'>
                Marco Kammer
              </h3>
              <h4 className='text-gray-700 dark:text-gray-200 mb-4'>
                VP of Developer Experience at{' '}
                <span className='font-semibold'>Athlete</span>
              </h4>
              <p className='text-gray-600 dark:text-gray-400 mb-16'>
                Helping developers build a faster web. Maybe teaching about web
                development, and React / Next.js. fixes this
              </p>
              <Copy />
            </div>
            <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 '>
              <Image
                alt='Marco Kammer'
                height={176}
                width={176}
                src='/profile.jpg'
                sizes='30vw'
                priority
                className='rounded-full filter grayscale'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
