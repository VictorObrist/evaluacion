import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";

class Home extends Component {
  closeSession = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Inicio</h1>
        <button className="btn btn-secondary" onClick={this.closeSession}>
          Cerrar Sesion
        </button>
      </div>
    );
  }
}

export default Home;
