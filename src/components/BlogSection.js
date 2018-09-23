import React, { Component } from 'react';

import BlogCard from './BlogCard'
import ActiveBlog from './ActiveBlog'

import '../css/BlogSection.css'

export default class BlogSection extends Component {
  constructor () {
    super()

    this.state = {
      currentPage: 1,
      activeBlogEntry: undefined,
      blogContainerState: 'blog-container'
    }

    this.generateArticle = this.generateArticle.bind(this);
    this.closeArticle = this.closeArticle.bind(this);
  }

  generateArticle(article) {
    this.setState({
      activeBlogEntry: article,
      blogContainerState: 'blog-container blog-container-hidden'
    });
  }

  closeArticle() {
    this.setState({
      activeBlogEntry: undefined,
      blogContainerState: 'blog-container'
    })
  }

  render() {

    return (
      <section className={this.props.className}>
        <header className="blog-header">
          <h1 className="blog-header-title">Blog</h1>
        </header>
        {this.state.activeBlogEntry &&
            <ActiveBlog 
              data={this.state.activeBlogEntry}
              closeArticle={this.closeArticle}
            />
        }
        <div className={this.state.blogContainerState}>
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

