import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

// // const DialogItem = (props) => {
// //   let path = "/dialogs/" + props.id;

//   return (
//     <div className={s.dialog + " " + s.active}>
//       <NavLink to={path}>{props.names}</NavLink>
//     </div>
//   );
// };
const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <div className={s.dialog + ''+s.active}>
        <NavLink to="/dialogs/1">Dimych1</NavLink>
        </div>
        <div className={s.dialog }>
        <NavLink to="/dialogs/2">Dimych2</NavLink>
        </div>
        <div className={s.dialog }>
        <NavLink to="/dialogs/3">Dimych3</NavLink>
        </div> <div className={s.dialog }>
        <NavLink to="/dialogs/4">Dimych4</NavLink>
        </div> <div className={s.dialog }>
        <NavLink to="/dialogs/5">Dimych5</NavLink>
        </div> <div className={s.dialog }>
        <NavLink to="/dialogs/6">Dimych6</NavLink>
        </div>
        {/* <DialogItem name="Dimych1" id="1" />
        <DialogItem name="Dimych2" id="2" />
        <DialogItem name="Dimych3" id="3" />
        <DialogItem name="Dimych4" id="4" />
        <DialogItem name="Dimych5" id="5" /> */}
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
