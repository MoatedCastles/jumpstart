import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'This is NavBar(I should always be here)!'
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-item">
          <Link className="steve" to="/">Home</Link>
        </div>
        <div className="nav-bar-item">
          <Link className="steve" to="/about">Info</Link>
        </div>
      </div>
    )
  }
}

export default NavBar;