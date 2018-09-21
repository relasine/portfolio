import React from 'react';

import '../css/Home.css';

function Home(props) {
  return(
    <article className="home-interior">
      <h2 className="home-title">Kevin Simpson</h2>
      <img 
        className="home-pic" 
        src="head-shot-square.jpg" 
        alt="kevin-simpson" 
        onLoad={() => {
          setTimeout(function() { props.imageLoaded() }, 3500);
        }}
      />
      <h4 className="home-subtitle">front-end engineer, 8th-level bard</h4>
      <p className="home-text">I'm a Denver-based front-end engineer who lives for finding clean, elegant, and empathetic digital solutions. I work in HTML, CSS, JavaScript and React. Currently attending The Turing School of Software and Design.</p>
    </article>
  )
}

export default Home;