import { useForm } from 'react-hook-form';
import { createBrowserHistory } from 'history';
import loop from '../../assets/icons/search.png';

const SearchForm = () => {
  const history = createBrowserHistory();
  const { register } = useForm({
    defaultValues: {
      query: '',
    },
  });

  return (
    <form
      onSubmit={() => history.push('/search')}
      className='flex cursor-text duration-200 space-x-2 max-w-md w-full bg-neutral-800 border border-neutral-800 py-2 hover:border-neutral-700 px-3 rounded-xl'
    >
      <img className='w-5 h-5' src={loop} alt='' />
      <input
        {...register('query')}
        className='focus:border-0 focus:border-blue-600 border-neutral-800 max-w-4xl text-neutral-200 placeholder:text-neutral-500 text-sm w-full bg-inherit'
        type='text'
        placeholder='Search your favorite movie...'
      />
    </form>
  );
};

export default SearchForm;
