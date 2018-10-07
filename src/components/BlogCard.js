 import React from 'react';

import '../css/BlogCard.css'

function BlogCard(props) {

  function reduceBody(string) {
    let result = string;
    let resultArray = result.split(' ');
    if (resultArray.length > 30){
      resultArray = resultArray.slice(0, 30);
      result = resultArray.join(' ') + '…';
    }
      return result;
  }

  const imageStyle = {
    background: `url(${props.data.background})`,
    backgroundSize: 'cover',
    width: '300px',
    height: '200px',
    margin: '0'
  }

  return (
    <article 
      className={props.data.classLabel}
      onClick={() => {
        props.generateArticle(props.data)
      }}
    >
      <div 
        className='article-image'
        style={imageStyle}
      >
      </div>
      <h2 className='article-title'>{props.data.title}</h2>
      <h3 className='article-author'>{props.data.author}</h3>
      <h4 className='article-date'>{props.data.date}</h4>
      <section className='article-body-preview'>
        <p className="article-paragraph">{reduceBody(props.data.body[0])}</p>
      </section>
    </article>
  )
}

export default BlogCard;