import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Message = (props) => {

  let path = "/dialogs/" + props.id;

  return <div className={s.dialog}>{props.messages}
  <NavLink to={path}>{props.message}</NavLink>
  </div>
};


export default Message;

