import React, { Component } from 'react';
import './App.css';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifecycleA />
        <LifecycleB />
      </div>
    );
  }
}

export default App;
