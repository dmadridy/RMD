import { useForm } from 'react-hook-form';
import { createBrowserHistory } from 'history';
import search from '../../assets/icons/search.png';

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
      className='flex relative cursor-text max-w-md w-full bg-neutral-800 rounded-xl'
    >
      <img
        className='absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 pointer-events-none'
        src={search}
        alt=''
      />
      <input
        {...register('query')}
        className='outline-none border duration-200 border-neutral-800 focus:border-neutral-700 pl-10 hover:border-neutral-700 max-w-4xl rounded-xl p-2 text-neutral-300 placeholder:text-neutral-500 text-sm w-full bg-inherit'
        type='text'
        placeholder='Search your favorite movie...'
      />
    </form>
  );
};

export default SearchForm;
