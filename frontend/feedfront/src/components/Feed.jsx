
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getfeed } from '../api/post';
import CreatePost from './CreatePost';

const Feed = () => {
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)



async function loadFeed() {
    try {
      const res = await getfeed();
      console.log("API response:", res);
      setPosts(res.data);
    } catch (error) {
      console.error("Failed to load feed", error.message);
    }finally {
        setLoading(false);
      }
  }



useEffect(() => {
    loadFeed();
}, []);



     if (loading) {
        return <p>Loading...</p>;
     }

  return (
   <>
   
   <CreatePost onPostCreated ={loadFeed}/>
   
    <div className='max-xl mx-auto mt-6 flex gap-3'>
       {post.map(pt => (
  <div key={pt._id} className="border p-4 mb-4 rounded">
    <p className="font-semibold">{pt.author} </p>

    <p className="mt-2">{pt.content}</p>

    <p className="text-sm text-gray-500">
      {new Date(pt.createdAt).toLocaleString()}
    </p>

    <p className="text-sm text-gray-500 mt-2">
      ❤️ {pt.likeCount || 0}
    </p>
  </div>
))}


    </div></>
  )
}

export default Feed



