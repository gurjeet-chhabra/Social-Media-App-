import React from 'react'

function Message({onPostClick}) {
  return (
    <center className='message'>
        <h1> zero post yet , Explore </h1>
        <button type="button" onClick={onPostClick} className="btn btn-primary">explore</button>
    </center>
  )
}

export default Message