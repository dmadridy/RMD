import { useForm } from 'react-hook-form';
import loop from '../assets/icons/search.png';

const SearchForm = () => {
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      query: '',
    },
  });
  const watchQuery = watch('query');
  return (
    <form className='flex max-w-md w-full'>
      <input
        {...register('query')}
        className='max-w-4xl text-neutral-200 placeholder:text-neutral-500 text-sm w-full bg-inherit'
        type='text'
        placeholder='Search your favorite movie...'
      />
      <button onClick={() => console.log(watchQuery)} type='submit'>
        <img className='w-5 h-5' src={loop} alt='' />
      </button>
    </form>
  );
};

export default SearchForm;
