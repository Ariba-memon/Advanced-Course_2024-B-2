import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'
import { useState,useEffect } from 'react'

import { Link } from 'react-router-dom'
import AddCommentForm from '../Components/AddCommentForm'
import CommentList from '../Components/CommentList'
import axios from 'axios'

//https://www.w3schools.com/react/react_useeffect.asp
const ArticlePage = () => {
    const {articleId} = useParams();
     const [articleInfo , setArticleInfo] = useState({favoriteblog:0,comments:[]})

useEffect(() =>{
  const loadArticleInfo = async () =>{
    const response = await axios.get(`/api/articles/${articleId}`);
    const newArticleInfo = response.data;
    setArticleInfo( newArticleInfo )
  }
  loadArticleInfo()
},[]);
const article = articles.find(article => article.name === articleId )

const addUpvote = async () =>{
  const response = await axios.put(`/api/articles/${articleId}/favoriteblog`);
const updatedArticle = response.data;
setArticleInfo(updatedArticle )
}

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
     <AddCommentForm  articleName={articleId} onArticleUpdated={ updatedArticle => setArticleInfo(updatedArticle)}/>
     <CommentList comments={articleInfo} />
      <button className='rounded-lg bg-black text-white p-4 m-4 font-serif'><Link to='/articles'>
     Back to Home Page</Link></button>
    </div>
  )
}

export default ArticlePage
