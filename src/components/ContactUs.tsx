import React from 'react';
import Image from 'next/image';
import Copy from './Copy';
import Form from './Form';

const ContactUs: React.FC = () => {
  return (
    // <div
    //   id='hire'
    //   className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'
    // >
    <section className='w-full'>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4'>
        Contact Us
      </h3>
      <p className=' mb-4'>
        Feel free to to contact me any time, through any method below.
      </p>
      <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24'>
        <Form />
        <Copy />
      </div>
    </section>
    // </div>
  );
};

export default ContactUs;
