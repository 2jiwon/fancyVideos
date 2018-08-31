import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA_5ujA5HcA7dXsOHEOTYckqhGJSEhtI3w';

// Create a new component. This component should produce some HTMl.
class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, function (videos) {
      this.setState({ videos });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this components generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
