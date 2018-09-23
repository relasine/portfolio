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
      background: './macbook-background2.jpg',
      title: 'The What and the Why',
      date: 'Saturday, September 22nd, 2018',
      author: 'Kevin Simpson',
      classLabel: 'article1 blog-article',
      body: [
        'When I was 16, I was at an impasse of-sorts. I knew that I either wanted to be a computer programmer or a music teacher. Due in no-small-part to a teenage reluctance to want to spend my post-adolescence sitting in college math classes, I choose music. I did that for a long time. I was good at it. I enjoyed working with the kids, but the job wasn\'t satisfying to me. It was hard work, but it wasn\'t intellectually challenging, and the pay was not good.',
        'I was born in 1982 and graduated high school in 2000, which puts me in that nebulous space between being a Gen-Xer and being a Millennial. It means that I was part of the last group of kids that grew up riding their bikes outside unaccompanied, and that the cultural norm for kids in my neighborhood was that we were out-of-the-house all day, but standing on the porch when the street lights came on. If I didn\'t come home covered in mud, it was because I was most likely up to something I shouldn\'t have been, and my mother knew it.',
        'This also means that I grew up parallel to the internet. Our family bought our first computer, a Gateway 486, when I was 11. When I was 13, we got AOL and a dial-up connection. I experienced the rise-and-fall of Napster. Broadband came when I was a senior in high school. I didn\'t own a cell phone until I was finished with my freshman year of college. I saw the birth of Amazon, of Facebook, of smart phones.',
        'I thought about these things for years. I thought about how they completely reshaped every facet of our lives, from the way that we communicate, to the way that we plan our meals, that we track our sleep, that we exercise, we travel, the way that we consume media, and share art, and teach our kids. I would think about these things, and then I would think about my son, and I would think about my wife, and our mortgage. And for the longest time I felt like there was a train, and it was racing us by, and I desperately wanted to be on it.',
        'Then a co-worker recommended I check out Turing, that her son had been through the program, and despite no previous technical experience was working as a front end engineer just six months after he started. So, I did. I read up on it online, went to a try-coding weekend, did my interview, quit my job, and started in June.',
        'And I\'ve never been so excited to be working so hard on anything in my life.',
        'The last several months have been hard. The course work is extremely challenging, the project load intense, and I often find myself at peak physical and mental exhaustion. But despite all of that, the only thing I want to do is to pull up my code and to get back to fucking crushing it.'
      ]
    },
    {
      background: './macbook-background2.jpg',
      title: 'The What and the Why',
      date: 'Saturday, September 22nd, 2018',
      author: 'Kevin Simpson',
      classLabel: 'article1 blog-article',
      body: [
        'When I was 16, I was at an impasse of-sorts. I knew that I either wanted to be a computer programmer or a music teacher. Due in no-small-part to a teenage reluctance to want to spend my post-adolescence sitting in college math classes, I choose music. I did that for a long time. I was good at it. I enjoyed working with the kids, but the job wasn\'t satisfying to me. It was hard work, but it wasn\'t intellectually challenging, and the pay was not good.',
        'I was born in 1982 and graduated high school in 2000, which puts me in that nebulous space between being a Gen-Xer and being a Millennial. It means that I was part of the last group of kids that grew up riding their bikes outside unaccompanied, and that the cultural norm for kids in my neighborhood was that we were out-of-the-house all day, but standing on the porch when the street lights came on. If I didn\'t come home covered in mud, it was because I was most likely up to something I shouldn\'t have been, and my mother knew it.',
        'This also means that I grew up parallel to the internet. Our family bought our first computer, a Gateway 486, when I was 11. When I was 13, we got AOL and a dial-up connection. I experienced the rise-and-fall of Napster. Broadband came when I was a senior in high school. I didn\'t own a cell phone until I was finished with my freshman year of college. I saw the birth of Amazon, of Facebook, of smart phones.',
        'I thought about these things for years. I thought about how they completely reshaped every facet of our lives, from the way that we communicate, to the way that we plan our meals, that we track our sleep, that we exercise, we travel, the way that we consume media, and share art, and teach our kids. I would think about these things, and then I would think about my son, and I would think about my wife, and our mortgage. And for the longest time I felt like there was a train, and it was racing us by, and I desperately wanted to be on it.',
        'Then a co-worker recommended I check out Turing, that her son had been through the program, and despite no previous technical experience was working as a front end engineer just six months after he started. So, I did. I read up on it online, went to a try-coding weekend, did my interview, quit my job, and started in June.',
        'And I\'ve never been so excited to be working so hard on anything in my life.',
        'The last several months have been hard. The course work is extremely challenging, the project load intense, and I often find myself at peak physical and mental exhaustion. But despite all of that, the only thing I want to do is to pull up my code and to get back to fucking crushing it.'
      ]
    },
    {
      background: './macbook-background2.jpg',
      title: 'The What and the Why',
      date: 'Saturday, September 22nd, 2018',
      author: 'Kevin Simpson',
      classLabel: 'article1 blog-article',
      body: [
        'When I was 16, I was at an impasse of-sorts. I knew that I either wanted to be a computer programmer or a music teacher. Due in no-small-part to a teenage reluctance to want to spend my post-adolescence sitting in college math classes, I choose music. I did that for a long time. I was good at it. I enjoyed working with the kids, but the job wasn\'t satisfying to me. It was hard work, but it wasn\'t intellectually challenging, and the pay was not good.',
        'I was born in 1982 and graduated high school in 2000, which puts me in that nebulous space between being a Gen-Xer and being a Millennial. It means that I was part of the last group of kids that grew up riding their bikes outside unaccompanied, and that the cultural norm for kids in my neighborhood was that we were out-of-the-house all day, but standing on the porch when the street lights came on. If I didn\'t come home covered in mud, it was because I was most likely up to something I shouldn\'t have been, and my mother knew it.',
        'This also means that I grew up parallel to the internet. Our family bought our first computer, a Gateway 486, when I was 11. When I was 13, we got AOL and a dial-up connection. I experienced the rise-and-fall of Napster. Broadband came when I was a senior in high school. I didn\'t own a cell phone until I was finished with my freshman year of college. I saw the birth of Amazon, of Facebook, of smart phones.',
        'I thought about these things for years. I thought about how they completely reshaped every facet of our lives, from the way that we communicate, to the way that we plan our meals, that we track our sleep, that we exercise, we travel, the way that we consume media, and share art, and teach our kids. I would think about these things, and then I would think about my son, and I would think about my wife, and our mortgage. And for the longest time I felt like there was a train, and it was racing us by, and I desperately wanted to be on it.',
        'Then a co-worker recommended I check out Turing, that her son had been through the program, and despite no previous technical experience was working as a front end engineer just six months after he started. So, I did. I read up on it online, went to a try-coding weekend, did my interview, quit my job, and started in June.',
        'And I\'ve never been so excited to be working so hard on anything in my life.',
        'The last several months have been hard. The course work is extremely challenging, the project load intense, and I often find myself at peak physical and mental exhaustion. But despite all of that, the only thing I want to do is to pull up my code and to get back to fucking crushing it.'
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
