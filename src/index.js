import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA_5ujA5HcA7dXsOHEOTYckqhGJSEhtI3w';

// Create a new component. This component should produce some HTMl.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this components generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
