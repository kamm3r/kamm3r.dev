import React, { PropsWithChildren } from 'react';

export const SuccessMessage: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
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

export const ErrorMessage: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
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
