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
  const onSubmit = () => dispatch(logIn(getValues('username')));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white w-fit text-black p-10'
    >
      <label htmlFor='username'>Username</label>
      <input
        className='block'
        {...register('username', { required: 'Needs to put something here' })}
        id='username'
        type='text'
      />
      <label htmlFor='password'>Password</label>
      <input
        className='block'
        {...register('password', { required: true })}
        id='password'
        type='password'
      />
      <div className='flex items-center justify-center'>
        <button type='submit'>Log in</button>
      </div>
    </form>
  );
};

export default Login;
