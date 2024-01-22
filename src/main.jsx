import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import CreateP from './components/CreateP.jsx';
import PostList  from './components/PostList.jsx';

const router = createBrowserRouter([
  { path: '/' , element: <App/> ,
   children: [
    { path: "/" , element:<PostList/>} ,
    {path: '/createpost' , element: <CreateP/>},
   ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
