import React from 'react';

import '../css/NavButton.css'

function NavButtons(props) {
  return (
    <div className={props.navButtonState}>
      <ul className="link-list">
        <li className="empty-item"></li>
        <li className="link-item" onClick={() => {props.pageCall('home')}}>
          <p className="link">Home</p>
        </li>
        <li className="link-item" onClick={() => {props.pageCall('about')}}>
          <p className="link">About</p>
        </li>
        <li className="link-item" onClick={() => {props.pageCall('projects')}}>
          <p className="link">Projects</p>
        </li>
      </ul>
    </div>
  );
}

export default NavButtons;