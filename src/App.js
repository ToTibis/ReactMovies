import {Fragment, Component} from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }


  render() {
    return (
      <Fragment>
        <div className="content">
          <Header/>
          <Main/>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}
