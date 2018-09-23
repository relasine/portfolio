import React, { Component } from 'react';

import BlogCard from './BlogCard'

import '../css/BlogSection.css'

export default class BlogSection extends Component {
  constructor () {
    super()

    this.state = {
      currentPage: 1,
      activeBlogEntry: undefined
    }

    this.generateArticle = this.generateArticle.bind(this);
  }

  generateArticle(article) {
    const PopUpArticle = React.createClass({
      render: () => {
        return (
          <article className="pop-up-article">
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <h3>{article.date}</h3>
            {article.body.map((paragraph) => {
              return (
                <p>{paragraph}</p>
              );
            })}
          </article>
        );
      }
    });

    React.render(
      <PopUpArticle />,
      document.querySelector('.blog-container')
    );
  }

  render() {

    return (
      <section className={this.props.className}>
        <header className="blog-header">
          <h1 className="blog-header-title">Blog</h1>
        </header>
        <div className="blog-container">
          {this.props.blogEntries.map((blogEntry) => {
            return <BlogCard 
              key={blogEntry.title} 
              data={blogEntry} 
              generateArticle={this.generateArticle} />
          })}
        </div>

      </section>
    )
  }
}

