import React, { useContext, useImperativeHandle, useRef } from 'react'
import { PostList } from '../store/PostLStore';
import {useNavigate} from 'react-router-dom'

function CreateP() {

  const {addPost} = useContext(PostList);
  const navigate = useNavigate();

  const useride = useRef();
  const titlee = useRef();
  const bodye = useRef();
  const reactionse = useRef();
  const tagse = useRef();

  const submit = (event) => {
   event.preventDefault();
  const userid = useride.current.value;
  const title = titlee.current.value;
  const body = bodye.current.value;
  const reactions = bodye.current.value;
  const tags = tagse.current.value.split(/(\S*)/);

  addPost(userid , title , body , reactions , tags)
  navigate('/')

  };
 
  return (
    <form className='createpost' onSubmit={submit}>
      <div className="mb-3">
    <label htmlFor="userid" className="form-label">your user id</label>
    <input type="userid" ref={useride} className="form-control" id="userid" placeholder='user id'/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">post title</label>
    <input type="title" ref={titlee} className="form-control" id="title" placeholder='title'/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <div className="mb-3">
    <label htmlFor="body" className="form-label">content</label>
    <textarea type="email" ref={bodye} className="form-control" id="content" placeholder='discription'/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">reactions</label>
    <input type="reactions" ref={reactionse} className="form-control" id="reactions" placeholder='people reacted to this post'/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">tags</label>
    <input type="tags" ref={tagse} className="form-control" id="tags" placeholder='enter tags'/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreateP