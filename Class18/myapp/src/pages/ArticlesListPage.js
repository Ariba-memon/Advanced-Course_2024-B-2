// import React from 'react'
// import { Link } from 'react-router-dom'
// import articles from './article-content'
// const ArticlesListPage = () => {
//   return (
//     <div>
//      <h1 className='font-serif text-center text-4xl m-10'>
//       Articles
//      </h1>
//      {
//       articles.map(article =>(
//         <Link to={`/articles/${article.name}`}>

//           <h3 className='text-center font-bold text-2xl'>{article.title}</h3>
//           <p className='text-center m-4 font-sans'>{article.content[0].substring(0,90)}</p>
//           <hr />
//         </Link>
        
//       ))
//      }
//     </div>
//   )
// }

// export default ArticlesListPage

import { Link } from 'react-router-dom';
import articles from './article-content';
import ArticlesList from '../Components/ArticlesList'
const ArticlesListPage = () => {
    return (
        <>
       
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;
