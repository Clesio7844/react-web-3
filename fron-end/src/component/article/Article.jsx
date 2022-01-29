import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className='gpt3__blog-container-article'>
      <div className='gpt3__blog-container-aricle-image'>
        <img src={imgUrl} alt='blog image' />
      </div>
      <div className='gpt3__blog-container-article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
