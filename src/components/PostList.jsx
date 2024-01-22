import React, { useContext, useState } from 'react'
import Post from './Post'
import { PostList as PLData } from '../store/PostLStore'
import Message from './Message';

function PostList() {
  const {postList , addPosts} = useContext(PLData);
  const [dataFetch , setDataFetch] = useState(false);
  
//   if (!dataFetch){
//     fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then((data) => {
//   addPosts(data.posts);
// });
// setDataFetch(true);
//   }

  const handleClick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{
      addPosts(data.posts);
    });
            
  }
  
  return (
    <>
    {postList.length === 0 && (
      <Message onPostClick={handleClick}/>
    )}
    {postList.map((post) => (
      <Post key={post.userid} post={post}/>
    ))}
    </>
  )
}

export default PostList