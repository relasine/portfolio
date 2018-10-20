import React, { Component } from 'react';

import NavBar from './NavBar';
import ProjectCard from './ProjectCard';
import SocialRow from './SocialRow';
import Home from './Home';
import BlogSection from './BlogSection'
import Loading from './Loading'
import Logo from './Logo'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loadingState: 'loader',
      homeState: 'inactive-main home-main',
      blogState: 'inactive-main blog-main',
      projectState: 'inactive-main project-main'
    }

    this.pageCall = this.pageCall.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  pageCall(call) {
    if (call === 'home' && this.state.homeState !== 'active-main home-main') {
      this.setState({
        homeState: 'active-main home-main',
        blogState: 'inactive-main blog-main',
        projectState: 'inactive-main project-main'  
      })
    } else if (call === 'blog' && this.state.blogState !== 'active-main blog-main') {
      this.setState({
        homeState: 'inactive-main home-main',
        blogState: 'active-main blog-main',
        projectState: 'inactive-main project-main'
      })
    } else if (call === 'projects' && this.state.contactState !== 'active-main project-main') {
      this.setState({
        homeState: 'inactive-main home-main',
        blogState: 'inactive-main blog-main',
        projectState: 'active-main project-main'
      })
    }
  }

  imageLoaded() {
    this.setState({
        loadingState: 'inactive-loading',
        homeState: 'active-main home-main',
        blogState: 'inactive-main blog-main',
        projectState: 'inactive-main project-main' 
    })
  }

  render() {

  const socialRowData = [
    {service: 'twitter', link: 'https://twitter.com/relasine'},
    {service: 'linkedin', link: 'https://www.linkedin.com/in/kevinjohnsimpson'},
    {service: 'instagram', link: 'https://www.instagram.com/kevinjohnsimpson/'},
    {service: 'github', link: 'https://www.github.com/relasine'},
    {service: 'envelope-o', link: 'mailto:simpsonkevinjohn@gmail.com'}
  ]

  const blogEntries = [
    {
      background: './coding-back.jpg',
      title: 'What it Takes to Succeed in a Bootcamp',
      date: 'Sunday, September 23rd, 2018',
      author: 'Kevin Simpson',
      classLabel: 'article3 blog-article',
      body: [
        'A question that I\'ve been thinking a lot about lately is what exactly does it take to be successful in a bootcamp-type coding school like Turing. Obviously you have to be willing to word hard. I regularly put in 14-hour days, and not just when a project is due or when an evaluation is imminent. You certainly have to be able to mentally and physically handle the workload, sure. You need to have a support system in-place to facilitate the wild life change that is a program like Turing\'s.',
        'However, what it really comes down to, in my eyes, is that you have to love coding. Not to just be able to deal with the frustration of having to internalize so much information in such a short period of time, but you have to love, I mean really love all of it. You have to embrace the struggle, see every failure as an opportunity to learn and do better. You have to ravenously celebrate your victories, no matter how small.',
        'If you really want to succeed in coding, you have to love it, all the way down to your bones.'
      ]
    },
    {
      background: './lean-on-back.jpg',
      title: 'A Letter to FE Mod1',
      date: 'Friday, September 21st, 2018',
      author: 'Kevin Simpson',
      classLabel: 'article2 blog-article',
      body: [
        'If you\'re starting at the Turing School of Engineering and Design, you are probably a bit apprehensive. You\'re most-likely surrounded by people you don\'t know, that you might not have very much in common with. They probably come from different parts of the country, have backgrounds much different than your own, have wildly different life-experiences.',
        'But I\'m going to tell you a secret: these people in your classroom with you, that you\'ll be slogging through projects with, that you\'ll be sitting with late into the night when evals are coming up, that will be there when you fail, and when you succeed... they\'re your biggest supporters',
        'Look, I\'m sure that your family and friends love you deeply, but for the next several months, the people in your mod will become something very much like a family. Pick them up when they\'re down, listen to them when they talk, cheer like crazy for them when things go their way.',
        'They need you, and you\'re going to need them, too.'
      ]
    },
    {
      background: './macbook-background2.jpg',
      title: 'The What and the Why',
      date: 'Saturday, September 13th, 2018',
      author: 'Kevin Simpson',
      classLabel: 'article1 blog-article',
      body: [
        'When I was 16, I was at an impasse of-sorts. I knew that I either wanted to be a computer programmer or a music teacher. Due in no-small-part to a teenage reluctance to want to spend my post-adolescence sitting in college math classes, I choose music. I did that for a long time. I was good at it. I enjoyed working with the kids, but the job wasn\'t satisfying to me. It was hard work, but it wasn\'t intellectually challenging, and the pay was not good.',
        'I was born in 1982 and graduated high school in 2000, which puts me in that nebulous space between being a Gen-Xer and being a Millennial. This also means that I grew up parallel to the internet. Our family bought our first computer, a Gateway 486, when I was 11. When I was 13, we got AOL and a dial-up connection. I experienced the rise-and-fall of Napster. Broadband came when I was a senior in high school. I didn\'t own a cell phone until I was finished with my freshman year of college. I saw the birth of Amazon, of Facebook, of smart phones.',
        'I thought about these things for years. I thought about how they completely reshaped every facet of our lives, from the way that we communicate, to the way that we plan our meals, that we track our sleep, that we exercise, we travel, the way that we consume media, and share art, and teach our kids. I would think about these things, and then I would think about my son, and I would think about my wife, and our mortgage. And for the longest time I felt like there was a train, and it was racing us by, and I desperately wanted to be on it.',
        'Then a co-worker recommended I check out Turing, that her son had been through the program, and despite no previous technical experience was working as a front end engineer just six months after he started. So, I did. I read up on it online, went to a try-coding weekend, did my interview, quit my job, and started in June.',
        'And I\'ve never been so excited to be working so hard on anything in my life.',
        'The last several months have been hard. The course work is extremely challenging, the project load intense, and I often find myself at peak physical and mental exhaustion. But despite all of that, the only thing I want to do is to pull up my code and to get back to crushing it.'
      ]
    }
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

  const cardData4 = {
    classLabel: 'project-card headcount-card',
    title: 'Headcount',
    body: 'This is fundamentally designed to challenge the developer to simultaneously manage multiple React components combined with having to make some difficult decisions about where and how data should be organized, stored, and manipulated.',
    link: 'https://www.github.com/relasine/headcount2.0'
  }

  const cardData5 = {
    classLabel: 'project-card swapi-card',
    title: 'SWAPIBox',
    body: 'This is project combines the challenge of nested api calls with finding a unique and modern interface utilizing React and React Router',
    link: 'https://github.com/relasine/SWAPIBox'
  }
    
    return (
      <div className="App">
        <NavBar pageCall={this.pageCall}/>
        <Loading loadClass={this.state.loadingState}/>
        <main className={this.state.homeState}>
          <Home imageLoaded={this.imageLoaded}/>
          <SocialRow data={socialRowData} /> 
          <Logo />
        </main>
        <main className={this.state.blogState}>
          <BlogSection 
            blogEntries={blogEntries}
          />
          <Logo />

        </main>
        <main className={this.state.projectState}>
          <header className="project-header">
            <div className="project-header-lil-container">
              <h1 className="project-header-title">Projects</h1>
              <p className="project-header-text">A collection of apps and webpages I have created using HTML, CSS, JavaScript, and React.</p>
            </div>
          </header>
          <section className="project-card-container">
            <ProjectCard cardData={cardData5} />
            <ProjectCard cardData={cardData4} />
            <ProjectCard cardData={cardData1} />
            <ProjectCard cardData={cardData2} />
            <ProjectCard cardData={cardData3} />

            <Logo />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
