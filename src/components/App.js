import React, { Component } from 'react';

import NavBar from './NavBar';
import ProjectCard from './ProjectCard';
import About from './About';
import SocialContainer from './SocialContainer'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      homeState: 'active-main home-main',
      aboutState: 'inactive-main about-main',
      projectState: 'inactive-main project-main'
    }

    this.pageCall = this.pageCall.bind(this);
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

  render() {

  const socialContents = [
    {service: 'facebook', link: 'https://www.facebook.com/kevin.simpson.547'},
    {service: 'twitter', link: 'https://twitter.com/relasine'},
    {service: 'linkedin', link: 'https://www.linkedin.com/in/kevinjohnsimpson'},
    {service: 'instagram', link: 'https://www.instagram.com/kevinjohnsimpson/'},
    {service: 'soundcloud', link: 'https://soundcloud.com/spekkiomusic'},
    {service: 'github', link: 'https://www.github.com/relasine'},
    {service: 'twitch', link: 'https://www.twitch.tv/relasine'},
    {service: 'codepen', link: 'https://codepen.io/relasine/'}
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
    body: 'An NPM module for for auto-complete functionality. Based on a pre-trie using OOP JavaScript. Is deployed within the Nimbus Weather app for city selection',
    link: 'https://www.github.com/relasine/auto-complete'
  }
    
    return (
      <div className="App">
        <NavBar pageCall={this.pageCall}/>
        <main className={this.state.projectState}>
          <header className="project-header">
            <div className="project-header-lil-container">
              <h1 className="project-header-title">Projects</h1>
              <p className="project-header-text">I make apps and websites for the internet. You can see some of them here. If you are interested, contact me and we will discuss it.</p>
            </div>
          </header>
          <section className="project-card-container">
            <ProjectCard cardData={cardData1} />
            <ProjectCard cardData={cardData2} />
            <ProjectCard cardData={cardData3} />
          </section>
          <SocialContainer data={socialContents} />
        </main>
        <main className={this.state.aboutState}>
              <About />
        </main>
      </div>
    );
  }
}

export default App;
