import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'
import { Link } from 'react-router-dom'
const ArticlePage = () => {
    const {articleId} = useParams();
     
const article = articles.find(article => article.name === articleId )
  return (
    <div>
     {/* <h1>This is the Page for the articles {articleId}</h1> */}

     <h1 className='text-start font-semibold m-10 text-5xl'>{article.title}</h1>
     {
        article.content.map(paragraph =>(
            <p className='text-justify m-4 p-2'>{paragraph }</p>
        )
        )
     }
     <button className='rounded-lg bg-black text-white p-4 m-4 font-serif'><Link to='/articles'>
     Back to Home Page</Link></button>
    </div>
  )
}

export default ArticlePage
