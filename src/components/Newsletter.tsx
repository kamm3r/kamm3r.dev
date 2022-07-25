import { AddNewletterType } from '../server/trpc/router/newletter';
import { trpc } from '../utils/trpc';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { registerClass } from 'superjson';
import LoadingSpinner from './LoadingSpinner';
import { ErrorMessage, SuccessMessage } from './StatusMessage';

export const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewletterType>();
  const inputEl = useRef(null);
  // const utils = trpc.useContext();
  const { data } = trpc.proxy.newsletter.allSubscriptions.useQuery();
  const { mutate, error, isSuccess, isLoading } =
    trpc.proxy.newsletter.subscribe.useMutation({
      onSuccess: (data) => {
        console.log('subscribed to newsletter', data);
      },
    });

  const subCount = new Number(data?.length);
  if (isLoading) return null;

  return (
    <div className='border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque'>
      <p className='text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100'>
        Subscribe to the newsletter
      </p>
      <p className='my-1 text-gray-800 dark:text-gray-200'>
        COMING SOON // Get emails from me about web development, tech, and early
        access to new articles.
      </p>
      {/* <form className='relative my-4' onSubmit={subscribe}> */}
      <form
        className='relative my-4'
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <input
          {...register('email')}
          aria-label='Email for newsletter'
          type='email'
          placeholder='joe@mama.com'
          autoComplete='email'
          required
          className='px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32'
        />
        <button
          className='flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28'
          type='submit'
        >
          {isLoading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {error ? (
        <ErrorMessage>{error.message}</ErrorMessage>
      ) : isSuccess ? (
        <SuccessMessage>WELL, Done My Boy!</SuccessMessage>
      ) : (
        <p className='text-sm text-gray-800 dark:text-gray-200'>
          {`${subCount > 0 ? subCount.toLocaleString() : '-'} subscribers – `}
          <a href='#DOLader' target='_blank' rel='noopener noreferrer'>
            View all issues
          </a>
        </p>
      )}
    </div>
  );
};
