import React, { Component } from 'react';
import Home from './components/Home/Home';
import Table from './components/Table/Table'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Table />
      </div>
    );
  }
}

export default App;
