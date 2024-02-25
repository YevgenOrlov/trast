import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
    <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Routes>
      <Route  path="/dialogs/"  element= { <Dialogs state = {props.state.dialogsPage}/>}/>

      <Route path="/profile/"   element= {<Profile state = {props.state.profilePage} addPost={props.addPost} />}/>
      </Routes>

    </div>
  </div>
  </BrowserRouter>
      

  );
};
//
//
export default App;