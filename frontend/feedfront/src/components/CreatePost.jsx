import React, { useState } from 'react'

import { createPost } from '../api/post';

const CreatePost = ({onPostCreated}) => {

    const [content, setContent] = useState('');
    const [loading, setloading] = useState(false)


const handleSubmit = async (e) =>{
    e.preventDefault();
const authorId = "susiCAzy";
     if (!content.trim()) return;

    try {
        setloading(true);
        await createPost({ content, authorId });
         setContent("");
         onPostCreated();
    } catch (error) {
        console.error("Create post failed", error.message);
        
    }
    finally {
      setloading(false);
    }
} 



  return (
    <div>
        <form className="max-w-xl mx-auto mt-6 mb-4" onSubmit={handleSubmit}>
            <textarea className='w-full border rounded p-2' placeholder='what is in your mind' value={content} onChange={(e)=> setContent(e.target.value)} />
            <button className='mt-2 px-4 py-4 bg-blue-600 text-white rounded'>{
                loading ? "Posting" : "Post"}</button>
        </form>
    </div>


  )
}

export default CreatePost