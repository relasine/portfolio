import React, { Component } from 'react';

import '../css/Hamburger.css'

export default class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      hamburgerToggle: ['hamburger'].join(' ')
    }

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {

    if (this.state.hamburgerToggle === ['hamburger', 'active'].join(' ')) {
      this.setState({
        hamburgerToggle: ['hamburger'].join(' '),
      });
    } else {
      this.setState({
        hamburgerToggle: ['hamburger', 'active'].join(' '),
      });
    }

    this.props.navButtonToggle()
  }

  componentDidMount() {
    setTimeout(() => {
      this.toggleHamburger();
    }, 4000)
  }

  render() {
    
    return (
      <div onClick={this.toggleHamburger} className={this.state.hamburgerToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );

  }
}