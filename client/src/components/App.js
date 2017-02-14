import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'Hello there!'
    }
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.greeting}
      </div>
    )
  }
}

export default App;