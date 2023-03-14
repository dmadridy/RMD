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
          <div className='space-y-2'>
            <li>
              How can i pass to my component MovieDetails the movie i want to
              fetch?
              <br />
              Solution: By wrapping each Item component after maping them inside
              a Link and asigning it the item.id value. Next, useParams hook
              allows to get that value and fetch the data i want to render. The
              same solution was implemented in Credits and Reviews component.
              The Route must be created dinamically. For instance: path =
              '/movies/:movieId'. This tells react that the parameter changes
              depending on the Item we click on.
            </li>
            <li>
              In the MovieDetails component, the Overview Navlink remains active
              despite we are in the Credits or Reviews component. <br />
              Solution: Since both Navlinks share part of the same URL, react
              router match the URL to the Route path, therefore Overview remains
              active, by adding the 'end' prop to the Ovweview Navlink we ensure
              that the active class is applied only when the to prop matches the
              end of the current URL.
            </li>
          </div>
        </div>
        <div className='text-neutral-300'>
          <h2 className='mb-6 text-amber-400 text-lg font-semibold'>
            Unsolved
          </h2>
          <div className='space-y-2'>
            <li>
              How can i go to '/search' without using Link or reloading the
              page?
              <br />
              Context: I currently have 4 different routes, one of those is the
              '/search' route. The only way to access this route is by the
              SearchForm component, which is a form that when submitting
              redirect thorugh the history.push method to that URL. Once im in
              that route, using the useSearchParams values im able to get the
              SearhForm data and fetch the data i want to render. The problem is
              that everytime i submit the form, the whole site gets rerendered
              by default behavior. Which means, the queries i cashed using React
              Query library will be erased and i will need to fetch them again,
              and, if i use HandleSubmit to prevent this, then i wont be able to
              get the url search params.
            </li>
            <li>
              How can i not repeat myself with the Pagination component and with
              the state attached to both the custom hooks and Pagination
              component
              <br />
              Context: There are 4 different routes, each has its own pagination
              results, which means, if store the page state in a global variable
              and consume it in each route. The state might be in 4 at the time
              i switch routes, therefore, the fetching will be called with 4
              instead of the 1, and that is not the propert behavior. Im
              currently using the Pagination component in the four different
              routes.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
