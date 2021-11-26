//borro
import "./App.css";
import React from "react";
//este se agrego
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Users from "./components/users/users";
import Home from "./components/home/home";

function App() {
  // mostrar mi componente
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/" element={<Navigate replace to="/users" />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
