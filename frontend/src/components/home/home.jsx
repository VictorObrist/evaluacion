import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import { Navigate } from "react-router-dom";

class Home extends Component {
  closeSession = () => {
    localStorage.clear();
  };

  componentDidMount() {
    console.log("Esta todo bien");
  }

  render() {
    if (!localStorage.getItem("user")) {
      console.log("No logueado");
      //window.location.href = "/login";
      return (
        <React.Fragment>
          <Navigate to="/login" replace={true} />;
        </React.Fragment>
      );
    }

    return (
      <div>
        <Navbar />
        <h1>Inicio</h1>
      </div>
    );
  }
}

export default Home;
