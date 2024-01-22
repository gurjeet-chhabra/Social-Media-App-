import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from '../store/PostLStore';

function Post({post}) {

  const {deletePost} = useContext(PostList);
  return (
    <div className="card postcard" style={{width: "30rem"}}>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
      onClick={() => deletePost(post.userid)}>
      <MdDeleteOutline />
  </span>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag)=>( <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}
      <div className="alert alert-dark reaction" role="alert">
 liked by {post.reactions} people
</div>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
  )
}

export default Post