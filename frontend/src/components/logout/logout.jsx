import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <React.Fragment>
        <Navigate to="/login" replace={true} />;
      </React.Fragment>
    );
  }
}

export default Logout;
