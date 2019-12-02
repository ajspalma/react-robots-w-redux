import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  render() {
    return (
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox />
        <CardList robots={ this.state.robots } />
      </div>
    );
  }
}

export default App;