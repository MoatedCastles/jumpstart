import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';

class Info extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'I\'m in Info component!'
    }
  }

  render() {
    return (
      <div className="info">
        <NavBar />
        {this.state.greeting}
      </div>
    )
  }
}

export default Info;