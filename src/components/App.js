import React, { Component } from 'react';

import NavBar from './NavBar';
import ProjectCard from './ProjectCard';
import SocialRow from './SocialRow';
import Home from './Home';
import Loading from './Loading'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loadingState: 'loader',
      homeState: 'inactive-main home-main',
      aboutState: 'inactive-main about-main',
      projectState: 'inactive-main project-main'
    }

    this.pageCall = this.pageCall.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  pageCall(call) {
    if (call === 'home' && this.state.homeState !== 'active-main home-main') {
      this.setState({
        homeState: 'active-main home-main',
        aboutState: 'inactive-main about-main',
        projectState: 'inactive-main project-main'  
      })
    } else if (call === 'about' && this.state.aboutState !== 'active-main about-main') {
      this.setState({
        homeState: 'inactive-main home-main',
        aboutState: 'active-main about-main',
        projectState: 'inactive-main project-main'
      })
    } else if (call === 'projects' && this.state.contactState !== 'active-main project-main') {
      this.setState({
        homeState: 'inactive-main home-main',
        aboutState: 'inactive-main about-main',
        projectState: 'active-main project-main'
      })
    }
  }

  imageLoaded() {
    this.setState({
        loadingState: 'inactive-loading',
        homeState: 'active-main home-main',
    })
  }

  render() {

  const socialRowData = [
      {service: 'twitter', link: 'https://twitter.com/relasine'},
      {service: 'linkedin', link: 'https://www.linkedin.com/in/kevinjohnsimpson'},
      {service: 'instagram', link: 'https://www.instagram.com/kevinjohnsimpson/'},
      {service: 'github', link: 'https://www.github.com/relasine'},
    ] 

  const cardData1 = {
    classLabel: 'project-card nimbus-card',
    title: 'Nimbus Weather',
    body: 'React-built weather app utilizing the Weather Underground api and an auto-complete npm module. Built for phones with clean, smooth design.',
    link: 'https://www.github.com/relasine/nmbus'
  }

  const cardData2 = {
    classLabel: 'project-card snake-card',
    title: 'Snake',
    body: 'This project was made by Cole Hart and Kevin Simpson as a part of the Front End Engineering Program at The Turing School of Software and Design. This project is focused around object-oriented-programming in JavaScript and HTML Canvas.',
    link: 'https://www.github.com/colehart/game-time'
  }

  const cardData3 = {
    classLabel: 'project-card autocomplete-card',
    title: 'Auto-Complete',
    body: 'An NPM module for auto-complete functionality. Based on a pre-trie using OOP JavaScript. Is deployed within the Nimbus Weather app for city selection',
    link: 'https://www.github.com/relasine/auto-complete'
  }
    
    return (
      <div className="App">
        <NavBar pageCall={this.pageCall}/>
        <Loading loadClass={this.state.loadingState}/>
        <main className={this.state.homeState}>
          <Home imageLoaded={this.imageLoaded}/>
          <SocialRow data={socialRowData} /> 
        </main>
        <main className={this.state.projectState}>
          <header className="project-header">
            <div className="project-header-lil-container">
              <h1 className="project-header-title">Projects</h1>
              <p className="project-header-text">A collection of apps and webpages I have created using HTML, CSS, JavaScript, and React.</p>
            </div>
          </header>
          <section className="project-card-container">
            <ProjectCard cardData={cardData1} />
            <ProjectCard cardData={cardData2} />
            <ProjectCard cardData={cardData3} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
