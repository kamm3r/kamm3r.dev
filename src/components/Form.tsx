import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { trpc } from '../utils/trpc';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const { mutate, isLoading, error } = trpc.proxy.contact.add.useMutation();

  // const sendMail = async (data: any) => {
  // const formData = new Map<string, FormData>();
  // Array.from(data).forEach((field: any) => {
  //   if (!field.name) return;
  //   formData.set(field.name, field.value);
  // });
  //   try {
  //     await fetch('/api/sendGrid', {
  //       method: 'POST',
  //       headers: { 'content-type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });

  //     //if sucess do whatever you like, i.e toast notification
  //     // setTimeout(() => reset(), 2000);
  //   } catch (error) {
  //     // toast error message. whatever you wish
  //     console.log('error', error);
  //   }
  // };
  const sendMails: SubmitHandler<FormData> = (data) => {
    try {
      fetch('/api/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      setTimeout(() => reset(), 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(sendMails)}>
      <fieldset className='flex flex-col space-y-4'>
        <div className='relative'>
          <label className='text-white block mb-2 text-base'>Name</label>
          <input
            type='text'
            className='w-full border border-gray-600 bg-[#2A2A35] px-2 py-2 text-sm rounded-md'
            {...register('name', { required: true })}
            placeholder='Joey Salad'
          />
          {errors?.name && <p>This is required</p>}
        </div>
        <div className='relative'>
          <label className='text-white block mb-2 text-base'>Email</label>
          <input
            className='w-full border border-gray-600 bg-[#2A2A35] px-2 py-2 text-sm rounded-md'
            type='email'
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder='joe@email.com'
          />
          {errors?.email && <p>This is required</p>}
        </div>
        <div className='relative'>
          <label className='text-white block mb-2 text-base'>Message</label>
          <textarea
            className='w-full border border-gray-600 bg-[#2A2A35] px-2 py-2 text-sm h-36 resize-none rounded-md'
            {...register('message', {
              required: true,
              maxLength: 300,
            })}
            placeholder='Message...'
          />
          {errors?.message && <p>This is required</p>}
        </div>
        <button
          type='submit'
          className='inline-flex justify-center items-center bg-white text-black rounded-md font-bold px-10 py-2  m'
        >
          Submit
        </button>
        {isSubmitSuccessful && (
          <p className='bg-green-400/bg-red-400/80 text-sm px-4 py-1 rounded'>
            <span className='font-bold'>Successs!</span> your email has been
            sent
          </p>
        )}
        {/* {errors && (
          <p className='bg-red-400/80 text-sm px-4 py-1 rounded'>
            <span className='font-bold'>Error!</span> your email was unable to
            be sent
          </p>
        )} */}
      </fieldset>
    </form>
  );
}
