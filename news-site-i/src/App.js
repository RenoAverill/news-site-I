import React, { useState } from 'react';
import News from './data/news.json';
import navItemsData from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.js'
import Article from './components/Article/Article.js'

function App(props) {
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];
    let articleData = {
      id: randomArticleIndex,
      title: randomArticle.title,
      abstract: randomArticle.abstract,
      byline: randomArticle.byline,
      image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
      created_date: randomArticle.created_date
    }
    const [navItems, setNavItem] = useState(navItemsData)
    const [article, setArticle] = useState(articleData)

    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />

        <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />

        <h1>ArticleTeaser Component</h1>
        <hr />

        <ArticleTeaser
          id={article.id}
          title={article.title}
          created_date={article.created_date}
          handleTitleClick={(articleID) => { console.log(articleID) }} />

        <h1>Article Component</h1>
        <hr />

        <Article {...article} />
      </div>
    )
}

export default App;
