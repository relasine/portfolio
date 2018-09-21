import React from 'react';

function SocialButtons(props) {
  return (
    <li><a href={props.data.link} target="_blank"><i className={`fa fa-${props.data.service}`}></i></a></li>
    )
}

export default SocialButtons