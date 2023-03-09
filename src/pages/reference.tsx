import Menu from '../layouts/menu';

const Reference = () => {
  return (
    <div className='mx-auto container pb-16 max-w-7xl'>
      <Menu />
      <h1 className='text-xl text-neutral-100 font-semibold pb-8'>
        Some of the problems encountered
      </h1>
      <div className='grid grid-cols-2 gap-20 text-justify'>
        <div className='text-neutral-300'>
          <h2 className='mb-6 text-cyan-300 text-lg font-semibold'>Solved</h2>
          <li>
            How can i pass to my component MovieDetails the movie i want to
            fetch?
            <br />
            Solution: By wrapping each Item component after maping them inside a
            Link and asigning it the item.id value. Next, useParams hook allows
            to get that value and fetch the data i want to render. The same
            solution was implemented in Credits and Reviews component. The Route
            must be created dinamically. For instance: path =
            '/movies/:movieId'. This tells react that the parameter changes
            depending on the Item we click on.
          </li>
        </div>
        <div className='text-neutral-300'>
          <h2 className='mb-6 text-amber-400 text-lg font-semibold'>
            Unsolved
          </h2>
          <li>
            How can i go to '/search' without using Link or reloading the page?
            <br />
            Context: I currently have 4 different routes, one of those is the
            '/search' route. The only way to access this route is by the
            SearchForm component, which is a form that when submitting redirect
            thorugh the history.push method to that URL. Once im in that route,
            using the useSearchParams values im able to get the SearhForm data
            and fetch the data i want to render. The problem is that everytime i
            submit the form, the whole site gets rerendered by default behavior.
            Which means, the queries i cashed using React Query library will be
            erased and i will need to fetch them again, and, if i use
            HandleSubmit to prevent this, then i wont be able to get the url
            search params.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Reference;
