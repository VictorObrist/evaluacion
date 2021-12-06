import React, { Component } from "react";
import { Outlet } from "react-router";
import Navbar from "../navbar/navbar";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </React.Fragment>
    );
  }
}
