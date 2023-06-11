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
        <div class="app-wrapper-content">
          <Routes>
          <Route path="/dialogs/*" element= {<Dialogs dialogs = {props.dialogs} messages = {props.messages} />}/>
            <Route path="/profile"   element= { <Profile posts = {props.posts} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
//
//

export default App;
