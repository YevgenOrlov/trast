import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {

  let postData = [
    {id:1, message: "Hi, how are you?", likesCount:12},
    {id:2, message: "Its my first , how bare you?",likesCount: 14},
  ]

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div> <textarea></textarea></div>
        <div>
        <button>AddPost</button></div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].message}/>
        <Post message={postData[1].message} likesCount={postData[1].message}/>
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
