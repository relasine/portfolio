import React, { Component } from 'react';

import Hamburger from './Hamburger'
import NavButtons from './NavButtons'

import '../css/NavBar.css'

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      navButtonState: 'nav-buttons'
    }

    this.navButtonToggle = this.navButtonToggle.bind(this);
  }

  navButtonToggle() {
    if (this.state.navButtonState === 'nav-buttons') {
      this.setState({
        navButtonState: 'nav-buttons activeButtons'
      }) 
    } else {
      this.setState({
        navButtonState: 'nav-buttons'
      }) 
    }
    
  }

  render() {

    return (
      <div className="navbar">
        <Hamburger navButtonToggle={this.navButtonToggle} />
        <NavButtons navButtonState={this.state.navButtonState} pageCall={this.props.pageCall} />
      </div>
    );

  }
}