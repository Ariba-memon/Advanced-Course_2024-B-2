import React from 'react'
import axios from 'axios'
import { useState } from 'react'

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
//https://medium.com/@aryanyash999/all-you-need-to-know-about-react-hooks-usestate-2d493f1be3d9
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
const AddCommentForm = ({articleName, onArticleUpdated}) => {
    const [name,setName] = useState('');
    const [commentText,setcommentText] = useState('');
    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comments`,{
            "postedBy": "ariba",
            "text": "excellent blog",
         
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setcommentText('')
    }

  return (
    // students work
    <div className='text-center'>
      <h3 className='text-3xl'>Add a Comment</h3>
      <label>
        Name:
        <input
        className='border border-blue-500 m-2'
        value={name}
        onChange={e => setName(e.target.value)}
        type='text' />
      </label>
      <label className='flex text-center m-20 p-10 ml-10'>
        Comment:
        <textarea
         className='border border-blue-500 m-2'
         value={commentText}
         onChange={e => setcommentText(e.target.value)}
        rows="2" cols="20"/>

        </label>
        <button className='rounded-lg bg-black text-white m-10 p-4' onClick={addComment}>Add Comment</button>
    </div>
  )
}

export default AddCommentForm
