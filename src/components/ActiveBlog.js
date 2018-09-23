import React from 'react'

import '../css/ActiveBlog.css'

function ActiveBlog(props) {

  const imageStyle = {
    background: `url(${props.data.background})`,
    backgroundSize: 'cover',
    backgroundPosition: '0 90%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '200px',
    margin: '0'
  }

  return (
    <article className="pop-up-article">
      <header 
        className="blog-article-header-image"
        style={imageStyle}
      >
        <i 
        className="fa fa-times-circle-o" 
        aria-hidden="true"
        onClick={() => {
          props.closeArticle();
        }}
      ></i>
      </header>
      
      <h1>{props.data.title}</h1>
      <h2>{props.data.author}</h2>
      <h3>{props.data.date}</h3>
      {props.data.body.map((paragraph, index) => {
        return (
          <p key={index}>{paragraph}</p>
        );
      })}
     </article>
  )
}

export default ActiveBlog;