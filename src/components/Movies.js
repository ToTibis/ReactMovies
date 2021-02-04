import Movie from './Movie'

export default function Movies(props) {
  const {movies} = props;

  return (
    <div className="container">
      {
        Array.isArray(movies) && movies.length
          ?
          <div>
            <ul className='movies__list'>
              {movies.map(movie => <li key={movie.imdbID}><Movie {...movie}/></li>)}
            </ul>
          </div>

          :
          <h3 className='h3'>Nothing found :(</h3>
      }
    </div>
  );
}
