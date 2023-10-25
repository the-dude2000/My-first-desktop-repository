import React from 'react';
import './blog.css';

const Blog = ({ imgUrl }) => {
  return (
    <div className='millertech__information-container_blog'>
      <div className='millertech__information-container_blog-image'>
      <img src={imgUrl} alt='information image'/>
      </div>
    </div>
  )
}

export default Blog