export const ProsCard = ({ title, pros }: any) => {
  return (
    <div className='border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900 rounded-xl p-6 my-4 w-full'>
      <span>{`You might use ${title} if...`}</span>
      <div className='mt-4'>
        {pros.map((pro: any) => (
          <div key={pro} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg className='h-4 w-4 text-green-500' viewBox='0 0 24 24'>
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ConsCard = ({ title, cons }: any) => {
  return (
    <div className='border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900 rounded-xl p-6 my-6 w-full'>
      <span>{`You might not use ${title} if...`}</span>
      <div className='mt-4'>
        {cons.map((con: any) => (
          <div key={con} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg className='h-4 w-4 text-red-500' viewBox='0 0 24 24'>
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </g>
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
