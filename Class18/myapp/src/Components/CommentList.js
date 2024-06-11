import { useState } from 'react';
import axios from 'axios';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }

    return (
        <div className='text-center '>
            <h3 className='font-Roboto text-2xl m-10'>Add a Comment</h3>
            <label className='text-lg m-10 '>
                Name:
                <input 
                className='border border-blue-500'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" />
            </label>
           
            <label className='m-10 text-left font-Roboto '>
                Comment:
                <textarea
                className='border border-blue-500 pl-10 '

                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    rows="2"
                    
                    cols="20" />
            </label>
            <button  className='bg-black text-white  rounded-lg font-Poppins w-40 m-4' onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;