import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";



const MyPost = (props) => {


  let postElements= props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div> <textarea></textarea></div>
        <div>
        <button>AddPost</button></div>
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

