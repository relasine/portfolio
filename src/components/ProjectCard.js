import React from 'react';

import '../css/ProjectCard.css'

function ProjectCard(props) {
  return (
    <section className='card-and-title'>
      <article className={props.cardData.classLabel}>
        <p className='card-body'>{props.cardData.body}</p>
        <div className='github-button'>
          <div 
            className="github-logo"></div>
          <a href={props.cardData.link}>GitHub Repo</a>
        </div>
      </article>
      <h2 className='card-title'>{props.cardData.title}</h2>
    </section>
  )
}

export default ProjectCard;