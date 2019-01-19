import React from 'react';
import SearchBar from '../containers/search-bar';
import SearchResult from '../containers/search-results';
import Favorites from '../containers/favorites';

require('./app.css');

const App = () => (

  <div>

    <h1>Toronto Waste Lookup</h1>

    <div className="content">

      <SearchBar> </SearchBar>

      <SearchResult></SearchResult> </div>

    <div>

      <Favorites></Favorites>

    </div>

  </div>

)

export default App;
