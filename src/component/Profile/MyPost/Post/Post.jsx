import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  

  return (
          
        <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQ5niRmkko664u4ktvSMY5g24WehbuTE6ncI2CpbxiOwBWEwOp3po8Tis1UZhAzNccE0&usqp=CAU'/>
          {props.message}
         
          <div>
            <span>likes= {props.likesCount}</span>
           
          </div>
        </div>
        
    
  );
};

export default Post;

/* // const Header = () => {
//     return (
//       <header className={s.header}>
//         <img src=".\6d775bd3acc0455ba1f0c8dc04f652ec.png" />
//       </header>
//     );
//   };
//   export default Header; */
