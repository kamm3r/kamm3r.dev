import React from 'react';
import Layout from '../components/Layout';
import { trpc } from '../utils/trpc';

export default function Admin() {
  const { data, isLoading } = trpc.proxy.auth.me.useQuery();
  const [isLoadings, setIsLoadings] = React.useState(false);
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);

  if (isLoading) return null;

  if (data !== 'ADMIN') {
    return (
      <h1>
        you ain&apos;t getting in bitch...you are a beta pussyhole bitch!!
      </h1>
    );
  }

  const uploadFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!e.target.files) return;
    if (!inputFileRef.current?.files?.length) return;
    const file = e.target.files[0];
    setIsLoadings(true);

    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach((file) => {
      formData.append('file', file);
    });

    const upload = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.log('Upload failed.');
    }
    setIsLoadings(false);
  };

  const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    /* If file is not selected, then show alert message */
    if (!inputFileRef.current?.files?.length) {
      alert('Please, select file you want to upload');
      return;
    }

    setIsLoadings(true);

    /* Add files to FormData */
    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach((file) => {
      formData.append('file', file);
    });

    /* Send request to our api route */
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const body = await res.json();

    alert(body.message);

    if (body.ok) {
      console.log('Uploaded successfully!');
      inputFileRef.current.value = '';
      // Do some stuff on successfully upload
    } else {
      // Do some stuff on error
      console.log('Upload failed.');
    }

    setIsLoadings(false);
  };

  return (
    <Layout
      title='Admin – Marco Kammer'
      description='Admin view to create blog post'
    >
      <div className='flex flex-col justify-center items-center py-8'>
        <h1 className='text-4xl mb-4'>Upload File</h1>
        <form
          className='mb-7 flex flex-col justify-between items-center space-y-5'
          // onSubmit={handleSubmit(onSubmit)}
        >
          {/* {!watch('files') || watch('files').length === 0 ? ( */}

          <input
            className='text-base p-4 border border-gray-400 rounded-lg'
            // {...register('files')}
            ref={inputFileRef}
            type='file'
            accept='.mdx'
            name='upload'
          />
          {/* ) : (
          <strong>{watch('files')[0].name}</strong>
        )} */}

          <input
            className='flex items-center justify-center px-4 py-1 font-medium  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-32'
            type='submit'
            value='Upload'
            disabled={isLoading}
            onClick={handleOnClick}
          />
          {isLoading && ` Wait, please...`}
          {/* {errors.files && <div>{errors.files.message}</div>} */}
          {/* )} */}
          {/* {uploadData && ( */}
          {/* <code className='text-left'>
          <pre>{JSON.stringify('32', null, 2)}</pre>
        </code> */}
          {/* )} */}
        </form>
        <form
          className='mb-7 flex flex-col justify-between items-center space-y-5'
          // onSubmit={handleSubmit(onSubmit)}
        >
          {/* {!watch('files') || watch('files').length === 0 ? ( */}

          <input
            className='text-base p-4 border border-gray-400 rounded-lg'
            // {...register('files')}
            type='file'
            accept='.mdx'
            name='upload'
          />
          {/* ) : (
          <strong>{watch('files')[0].name}</strong>
        )} */}

          <input
            className='flex items-center justify-center px-4 py-1 font-medium  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-32'
            type='submit'
            value='Upload'
            disabled={isLoading}
            onChange={uploadFile}
          />
          {isLoading && ` Wait, please...`}
          {/* {errors.files && <div>{errors.files.message}</div>} */}
          {/* )} */}
          {/* {uploadData && ( */}
          {/* <code className='text-left'>
          <pre>{JSON.stringify('32', null, 2)}</pre>
        </code> */}
          {/* )} */}
        </form>
        <h1>This page is protected by Middleware</h1>
        <p>Only admin users can see this page.</p>
        <p>
          To learn more about the NextAuth middleware see&nbsp;
          <a href='https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs#middleware'>
            the docs
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}
