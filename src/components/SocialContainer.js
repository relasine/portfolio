import React, { Component } from 'react';
import SocialButtons from './SocialButtons'

import '../css/SocialContainer.css'

export default class SocialContainer extends Component {
  constructor() {
    super();

    this.state = {
      socialClass: ['social-toggle', 'inactive'].join(' '),
      buttons: 'inactive'
    }

    this.toggleSocialButtons = this.toggleSocialButtons.bind(this);
  }

  toggleSocialButtons() {
    if (this.state.socialClass === ['social-toggle', 'inactive'].join(' ')) {
      this.setState({
        socialClass: ['social-toggle', 'active'].join(' '),
        buttons: 'active'
      });
    } else {
      this.setState({
        socialClass: ['social-toggle', 'inactive'].join(' '),
        buttons: 'inactive'
      });  
    }
  }

  render() {

    return (
      <div className="social-container" >
        <div className={this.state.socialClass} onClick={this.toggleSocialButtons}></div>
          <ul className={this.state.buttons}>
            {this.props.data.map((account) => {
              return <SocialButtons key={account.service} data={account} />
            })}
          </ul>
      </div>
    );

  }
}