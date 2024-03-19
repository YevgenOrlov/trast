import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/state"; 
import  {updateNewPostTextActionCreator} from "../../../redux/state"; 


const MyPost = (props) => {
  
  let postElements= props.posts.map(p=>
  <Post message={p.message} likesCount={p.likesCount}  id={p.id} key={p.id}/>)

  let newPostElement = React.createRef();

  let addPost = () => {   
    props.dispatch( addPostActionCreator());  
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    
    props.dispatch(action);
    
 }

  return (
    
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
         <div>
          <textarea onChange={onPostChange} ref={newPostElement} 
           value={props.newPostText} />
         </div>
         <div>
           <button onClick = {addPost}>AddPost</button></div>
         </div>
         <div className={s.posts}>
          {postElements}
         </div>
    </div>
  );
};
export default MyPost;
  /* // const Header = () => {
//     return (
//       <header className={s.header}>
//         <img src=".\6d775bd3acc0455ba1f0c8dc04f652ec.png" />
//       </header>
//     );
//   };
//   export default Header; */
