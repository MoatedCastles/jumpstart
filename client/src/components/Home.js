import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'I\'m in Home Component!'
    }
  }

  render() {
    return (
      <div className="home">
        <NavBar />
        <br />
        Sup dude!
        {this.state.greeting}
      </div>
    )
  }
}

export default Home;