import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Routes>
      <Route  path="/dialogs/"  element= { <Dialogs state = {props.state.dialogsPage}/>}/>

      <Route path="/profile/"   element= {<Profile profilePage = {props.state.profilePage}
                                                   dispatch={props.dispatch} />}/>
      </Routes>

    </div>
  </div>
  </BrowserRouter>
      

  );
};
//
//
export default App;