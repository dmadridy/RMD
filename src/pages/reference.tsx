const Reference = () => {
  return (
    <div>
      <h1>Some of the problems i've encountered</h1>
      <div>
        <h2>Solved</h2>
        <li>
          How can i pass to my component MovieDetails the movie i want to fetch?
          <br />
          Solution: By wrapping each Item component after maping them inside a
          Link and asigning it the item.id value. Next, useParams hook allows to
          get that value and fetch the data i want to render. The same solution
          was implemented in Credits and Reviews component. The Route must be
          created dinamically. For instance: path = '/movies/:movieId'. This
          tells react that the parameter changes depending on the Item we click
          on.
        </li>
      </div>
      <div>
        <h2>Unsolved</h2>
      </div>
      <li>
        How can i go to '/search' without using Link or reloading the page?
        <br />
        Context: I currently have 4 different routes, one of those is the
        '/search' route. The only way to access this route is by the SearchForm
        component, which is a form that when submitting redirect thorugh the
        history.push method to that URL. Once im in that route, using the
        useSearchParams values im able to get the SearhForm data and fetch the
        data i want to render. The problem is that everytime i submit the form,
        the whole site gets rerendered by default behavior. Which means, the
        queries i cashed using React Query library will be erased and i will
        need to fetch them again, and, if i use HandleSubmit to prevent this,
        then i wont be able to get the url search params.
      </li>
    </div>
  );
};

export default Reference;
