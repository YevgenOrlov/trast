import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
 };
const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogs = [
    {id:1, name: "Dimych1"},
    {id:2, name: "Dimych2"},
    {id:3, name: "Dimych3"},
    {id:4, name: "Dimych4"},
    {id:5, name: "Dimych5"},
    {id:6, name: "Dimych6"},
    ]

    let messages = [
      {id:1, message: "hi"},
      {id:2, message: "How is you"},
      {id:3, message: "ebdd"},
      {id:4, message: "ebdd"},
      {id:5, message: "ebdd"},
      {id:6, message: "ebdd"},
      ]



let dialogsElements = dialogs.map((d)=><DialogItem name={d.name} id={d.id} />)

let messagesElements= messages.map(m=><Message message={m.message} />)

 
          


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      
       {dialogsElements}
         
      </div>
       <div className={s.messages}>
        {messagesElements}        
      </div>  
    </div>

  );
};
export default Dialogs;
