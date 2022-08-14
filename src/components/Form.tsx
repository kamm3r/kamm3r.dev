import { SubmitHandler, useForm } from 'react-hook-form';

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
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='flex flex-col space-y-4'>
        <div className='relative'>
          <label className='text-white block mb-2 text-base'>Name</label>
          <input
            type='text'
            className='w-full border border-gray-600 bg-[#2A2A35] px-2 py-2 text-sm rounded-md'
            {...register('name')}
            placeholder='Joey Salad'
          />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <div className='relative'>
          <label className='text-white block mb-2 text-base'>Email</label>
          <input
            className='w-full border border-gray-600 bg-[#2A2A35] px-2 py-2 text-sm rounded-md'
            type='email'
            {...register('email')}
            placeholder='joe@email.com'
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div className='relative'>
          <label className='text-white block mb-2 text-base'>Message</label>
          <textarea
            className='w-full border border-gray-600 bg-[#2A2A35] px-2 py-2 text-sm h-36 resize-none rounded-md'
            {...register('message')}
            placeholder='Message...'
            maxLength={280}
          />
          {errors?.message && <p>{errors.message.message}</p>}
        </div>
        <button
          type='submit'
          className='inline-flex justify-center items-center bg-white text-black rounded-md font-bold px-10 py-2  m'
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
}
