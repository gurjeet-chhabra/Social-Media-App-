import { createContext, useReducer } from "react";

export const PostList = createContext({

    postList: [],

    addPost: () =>{},

    deletePost: () =>{},

    addPosts : () =>{},
});

const postListReducer = (currPostList , action) =>{
    let newPost = currPostList;
    if(action.type === 'delete'){
        newPost = currPostList.filter(
            (post) => post.userid !== action.payload.postId
        );
    }  else if ( action.type === 'addposts') {
        newPost = action.payload.posts;
    } 
    else if ( action.type === 'add') {
         newPost = [action.payload , ...currPostList]
    }
    return newPost;
};
const PostListProvider = ({children}) =>{

    const [postList , dispatchPostList] = useReducer(postListReducer , []);

    const addPost = (userid , title , body , reactions , tags) => {
        // console.log("clicked")
        dispatchPostList({
            type: 'add',
            payload:{
                userid:Date.now(),
                title:title,
                body:body,
                reactions: reactions,
                useId:userid,
                tags:tags,
             },
        })
           
    };

    const addPosts = (posts) => {
        // console.log("clicked")
        dispatchPostList({
            type: 'addposts',
            payload:{
               posts,
             },
        })
           
    };

    const deletePost = (postId) =>{
        dispatchPostList({
            type: "delete",
            payload: {
                postId,
            },
        })
    };
    return (
   <PostList.Provider value={{postList,addPosts,addPost,deletePost}}>
     {children}
     </PostList.Provider>
    )
}

// const defaltPost = [{
//    userid: "1",
//    title:'delhi',
//    body:'delhi for vacations',
//    reactions: 0,
//    useId:'user9',
//    tags: ['vacations' , 'weekend']
// },
// {
//     userid: "2",
//     title:'food',
//     body:'food for vacations',
//     reactions: '15',
//     useId:'user2',
//     tags: ['vacations' , 'weekend']
//  },];
export default PostListProvider;