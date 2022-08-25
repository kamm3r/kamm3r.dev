import React from 'react';
import Layout from '../components/Layout';

const Faq: React.FC = () => {
  return (
    <Layout title='FAQ'>
      <div className='flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
          FAQ
        </h1>
        <p className='text-gray-600 dark:text-gray-400 mb-16'>
          question about stuff
        </p>
        <ul>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What programming languages do you know?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              cumque eveniet reprehenderit. Enim architecto at corrupti, saepe
              ipsa similique? Vero.
            </p>
          </li>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What programming languages do you know?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              cumque eveniet reprehenderit. Enim architecto at corrupti, saepe
              ipsa similique? Vero.
            </p>
          </li>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What programming languages do you know?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              cumque eveniet reprehenderit. Enim architecto at corrupti, saepe
              ipsa similique? Vero.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Faq;
