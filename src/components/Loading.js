import React from 'react'

import '../css/Loading.css'

function Loading(props) {
  return(
    <aside className={props.loadClass}>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
    </aside>
  )
}

export default Loading;