import {Component} from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: props.defaultSearchText,
      searchType: 'all'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  search() {
    this.props.searchMovie(this.state.search, this.state.searchType);
  }

  handleKey(event) {
    if (event.key === 'Enter') this.search();
  }

  clickHandle() {
    this.search()
  }

  handleSearchTypeChange(event) {
    this.setState({searchType: event.target.value}, () => {
      this.search();
    });
  }

  componentDidMount() {
    this.search()
  }

  render() {
    return (
      <div className="container mb-4">
        <div className='row align-items-end no-gutters'>
          <div className="col-sm-9">
            <div className="form-group mb-0">
              <label htmlFor="moviesSearch">Enter your search term</label>
              <input
                type="search"
                className="form-control"
                id='moviesSearch'
                value={this.state.search}
                onChange={this.handleChange}
                onKeyDown={this.handleKey}
              />
            </div>
          </div>
          <div className="col-sm-3 pl-sm-3 mt-3 mt-sm-0">
            <button type='button' className='btn btn-primary w-100' onClick={this.clickHandle}>Search</button>
          </div>
        </div>
        <small id="moviesSearchHelp" className="form-text text-muted">Press "Enter" or "Search" button to search</small>
        <div className='pt-3'>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filterFilmsByType"
              id="filterTypeAll"
              value="all"
              checked={this.state.searchType === 'all'}
              onChange={this.handleSearchTypeChange}
            />
            <label className="form-check-label" htmlFor="filterTypeAll">All</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filterFilmsByType"
              id="filterTypeMovie"
              value="movie"
              checked={this.state.searchType === 'movie'}
              onChange={this.handleSearchTypeChange}
            />
            <label className="form-check-label" htmlFor="filterTypeMovie">Movies only</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filterFilmsByType"
              id="filterTypeSeries"
              value="series"
              checked={this.state.searchType === 'series'}
              onChange={this.handleSearchTypeChange}
            />
            <label className="form-check-label" htmlFor="filterTypeSeries">Series only</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filterFilmsByType"
              id="filterTypeGames"
              value="game"
              checked={this.state.searchType === 'game'}
              onChange={this.handleSearchTypeChange}
            />
            <label className="form-check-label" htmlFor="filterTypeGames">Games only</label>
          </div>
        </div>
      </div>
    )
  }
}
