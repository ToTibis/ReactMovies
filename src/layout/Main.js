import React from 'react';
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.key = process.env.REACT_APP_API_KEY;
    this.url = `https://www.omdbapi.com/?apikey=${this.key}`
    this.defaultSearchText = localStorage.getItem('last-search-term') || 'Terminator';

    this.state = {
      movies: [],
      isLoading: true
    }

    this.searchMovie = this.searchMovie.bind(this);
  }

  async searchMovie(name, searchType = 'all') {
    this.setState({ isLoading: true });
    try {
      const urlRoot = this.url + (name ? `&s=${name}` : `&s=${this.defaultSearchText}`)
      const searchParams = searchType !== 'all' ? `&type=${searchType}` : '';

      const response = await fetch(urlRoot + searchParams);
      const data = await response.json();

      this.setState({ movies: data.Search, isLoading: false });
    } catch (e) {
      console.warn(e);
      this.setState({ movies: [], isLoading: false });
    } finally {
      localStorage.setItem('last-search-term', name);
    }
  }


  render() {
    const {movies, isLoading} = this.state;
    return (
      <main className='py-4 py-sm-5'>
        <Search
          searchMovie={this.searchMovie}
          defaultSearchText={this.defaultSearchText}
        />
        {
          isLoading ?
            <Preloader/>
            :
            <Movies movies={movies}/>
        }

      </main>
    )
  }
}
