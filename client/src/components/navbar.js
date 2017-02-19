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
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <Link className="steve" to="/">Home</Link>

          <Link className="steve" to="/about">Info</Link>
        </div>
      </nav>
    )
  }
}

export default NavBar;