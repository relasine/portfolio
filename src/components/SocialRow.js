import React from 'react'

import SocialButtons from './SocialButtons'

import '../css/SocialRow.css'

function SocialRow(props) {
  return(
    <footer className="social-row">
      <ul className="social-list">
              {props.data.map((account) => {
                return <SocialButtons key={account.service} data={account} />
              })}
      </ul>
    </footer>
  )
}

export default SocialRow;