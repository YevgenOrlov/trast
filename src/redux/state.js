import {rerenderEntireTree} from './../render'

let state = {  


   dialogsPage : {        
    dialogs : [
                  {id:1, name: "Dimych1"},
                  {id:2, name: "Dimych2"},
                  {id:3, name: "Dimych3"},
                  {id:4, name: "Dimych4"},
                  {id:5, name: "Dimych5"},
                  {id:6, name: "Dimych6"}
                 ],
   messages : [
        {id:1, message: "hi"},
        {id:2, message: "How is you"},
        {id:3, message: "ebdd"},
        {id:4, message: "ebdd"},
        {id:5, message: "ebdd"},
        {id:6, message: "ebdd"}
                  ]       
               },
              
   profilePage : {
    posts: [
             {id:1, message: "Hi, how are you?", likesCount: 12},
             {id:2, message: "Its my first , how bare you?", likesCount: 14},
             {id:3, message: "Hi, how are you?", likesCount: 12},
             {id:4, message: "Its my first , how bare you?", likesCount: 14}
                 ],
                 newPostText: 'tttttttttttttt'
               }
         }

export let addPost = (postMessage) => {

 let newPost = {
  id:5, 
  message: postMessage,
  likesCount: 0
   };
state.profilePage.posts.push(newPost);
  rerenderEntireTree();
}



  export default state;