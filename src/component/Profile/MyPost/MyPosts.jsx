import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";



const MyPost = (props) => {


  let postElements= props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.pos0tBlock}>
      <h3>My post</h3>
      <div>
        <div> <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/></div>
        <div>
        <button onClick = { addPost }>AddPost</button></div>
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

