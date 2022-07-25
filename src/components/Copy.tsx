import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>; // Return success

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');

      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => {
        setCopiedText('');
      }, 2000);

      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);

      return false;
    }
  };

  return [copiedText, copy];
}

export default function Copy() {
  const text: string = 'marcokammer59@gmail.com';
  const [value, copy] = useCopyToClipboard();

  return (
    <div className='flex flex-col mt-12'>
      <button
        className='flex space-x-2 items-center'
        onClick={() => copy(text)}
        disabled={!text}
      >
        <p
          className={
            !value
              ? 'text-base text-gray-400 xl:text-xl'
              : 'text-base text-white xl:text-xl'
          }
        >
          {text}
        </p>
        <MdContentCopy
          className={
            !value
              ? 'text-2xl text-gray-400 xl:text-xl'
              : 'text-2xl text-white xl:text-xl'
          }
        />
      </button>
      {value && <p className='font-bold mr-5'>Copied!</p>}
    </div>
  );
}
