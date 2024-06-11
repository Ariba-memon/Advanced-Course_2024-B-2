import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../pages/article-content'
const ArticlesList = () => {
  return (
    <div>
       <h1 className='m-20 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Articles</h1>
        {articles.map(article => (
            <Link key={article.name} className="text-center font-sans" to={`/articles/${article.name}`}>
                <h3 className='font-Roboto m-10 font-bold text-2xl '>{article.title}</h3>
           
                <p className='font-Poppins rounded-lg m-10 '>{article.content[0].substring(0, 120)}...</p>
                <hr />
            </Link>
        ))}
    </div>
  )
}

export default ArticlesList
