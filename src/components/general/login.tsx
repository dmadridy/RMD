import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/user';

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(logIn(getValues('username')));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='text-black p-8 rounded-xl bg-neutral-800 border border-neutral-700 font-semibold'
    >
      <div className='mb-2 space-y-2'>
        <label className='text-neutral-200' htmlFor='username'>
          Username
        </label>
        <input
          className='block outline-none border w-full duration-200 border-neutral-700 focus:border-neutral-600 hover:border-neutral-600 max-w-2xl rounded-lg p-2 text-neutral-300 placeholder:text-neutral-500 text-sm bg-neutral-700'
          {...register('username', {
            required: true,
            pattern: /^[a-zA-Z0-9]*$/,
            minLength: 4,
            maxLength: 12,
          })}
          id='username'
          type='text'
        />
      </div>
      <div className='space-y-2 mb-4'>
        <label className='text-neutral-200' htmlFor='password'>
          Password
        </label>
        <input
          className='block outline-none border w-full duration-200 border-neutral-700 focus:border-neutral-600 hover:border-neutral-600 max-w-2xl rounded-lg p-2 text-neutral-300 placeholder:text-neutral-500 text-sm bg-neutral-700'
          {...register('password', {
            required: true,
            minLength: 4,
            maxLength: 12,
          })}
          id='password'
          type='password'
        />
      </div>
      <div className='flex items-center text-neutral-200 hover:text-white duration-200 text-lg justify-center'>
        <button type='submit'>Log In</button>
      </div>
    </form>
  );
};

export default Login;
