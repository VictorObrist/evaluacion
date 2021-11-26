import React, { Component } from "react";
import "./login.css";
import logo from "./bootstrap-logo.svg";
import httpService from "../../services/httpService";

//de la libreria del react que esta en el node_modules (listado en el package)
//vamos a importar la clase Component y React
//ahora vamos a crear una clase llamada Login, que sera nuestro componente login

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("user")) {
      window.location.href = "/";
    }
  }
  //async await
  doSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    const { data } = await httpService.post(
      "http://localhost:5000/login",
      this.state
    );

    if (data.length !== 0) {
      console.log("Se encontraron datos");
      localStorage.setItem("user", data[0].name);
      window.location.href = "/";
    } else {
      console.log("Error en el Login");
    }

    console.log(data);
  };

  //arrow function -> funcion flecha
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <main className="form-signin">
          <form onSubmit={this.doSubmit}>
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
    );
  }
}
//extends va a heredar las caracteristicas de la clase Components, ue tiene un metodo llamado render
export default Login;
