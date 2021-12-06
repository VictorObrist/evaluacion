import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Usuarios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Cerrar sesion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
