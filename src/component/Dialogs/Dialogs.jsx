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

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <DialogItem name="Dimych1" id="1"/>
       
         <DialogItem name="Dimych2" id="2" />
        <DialogItem name="Dimych3" id="3" />
        <DialogItem name="Dimych4" id="4" />
        <DialogItem name="Dimych5" id="5" />
        <DialogItem name="Dimych6" id="6" /> 
      </div>
       <div className={s.messages}>
        <Message message="hi" />
        <Message message="How is you" />
        <Message message="ety" /> 
        <Message message="ety" />
        <Message message="ety" />
      </div>  
    </div>

  );
};
export default Dialogs;
