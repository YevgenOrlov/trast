import React from "react";
import MyPost from "./MyPost/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {

  
  return (
    <div>
      <ProfileInfo/>
      <MyPost  posts = {props.state.posts}/>
    </div>
  );
};

export default Profile;

//  const Header = () => {
//     return (
//       <header className={s.header}>
//         <img src=".\6d775bd3acc0455ba1f0c8dc04f652ec.png" />
//       </header>
//     );
//   };
//   export default Header;
