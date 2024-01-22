import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import CreateP from '../components/CreateP'
// import Post from './components/Post';
import PostList from '../components/PostList';
import PostListProvider from '../store/PostLStore';
import {Outlet} from 'react-router-dom'
 
function App() {
  
    const [tab , setTab] = useState("home")
  return (
    <PostListProvider>
    <div className="container " style={{padding:"0px" , margin: "0px"}}>
    <Sidebar tab={tab} setTab={setTab}/>
    <div className='content '>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App
