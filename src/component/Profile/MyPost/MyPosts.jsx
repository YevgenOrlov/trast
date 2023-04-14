import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>AddPost</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?'/>
        <Post message='Its my first , how bare you?'/>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPost;

{
  /* // const Header = () => {
//     return (
//       <header className={s.header}>
//         <img src=".\6d775bd3acc0455ba1f0c8dc04f652ec.png" />
//       </header>
//     );
//   };
//   export default Header; */
}
