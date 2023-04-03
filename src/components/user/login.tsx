import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Username</label>
      <input
        {...register('username', { required: true })}
        id='username'
        type='text'
      />
      <label htmlFor='password'>Password</label>
      <input
        {...register('password', { required: true })}
        id='password'
        type='password'
      />
    </form>
  );
};

export default Login;
