import { AddNewletterType } from '../server/trpc/router/newletter';
import { trpc } from '../utils/trpc';
import React, { useRef, PropsWithChildren, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';

export const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewletterType>();
  const [isDisabled] = useState(false);
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
          disabled={!isDisabled}
          className={
            isDisabled === false
              ? 'flex items-center justify-center absolute right-1 top-1 px-4 py-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28 opacity-50'
              : 'flex items-center justify-center absolute right-1 top-1 px-4 py-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28'
          }
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

const SuccessMessage: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <p className='flex items-center text-sm font-bold text-green-700 dark:text-green-400'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='mr-2 h-4 w-4'
      >
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
      {children}
    </p>
  );
};

const ErrorMessage: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <p className='flex items-center text-sm font-bold text-red-800 dark:text-red-400'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='mr-2 h-4 w-4'
      >
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
      {children}
    </p>
  );
};
