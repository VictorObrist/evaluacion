import { Component } from "react";
import "./login.css";
import logo from "./bootstrap-logo.svg";
import httpService from "../../services/httpService";

// class -> className en el return
class Login extends Component {
  constructor(props) {
    super(props); // para llamar al constructor del padre, en este caso el Component
    this.state = { email: "" }; //state -> estado del Componente

    this.handleEmail = this.handleEmail.bind(this);
  }

  // arrow function
  //nombreFuncion = (parametro) => {...}
  // formato en Javascript mas nuevo
  doSubmit = (event) => {
    event.preventDefault(); //para que no recargue devuelta
    //console.log("Enviando..."); //mostrar en la consola
    console.log(this.state);

    const { data } = await httpService.post(
      "http://localhost:5000/login",
      this.state
    );
    console.log(data);
  };

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
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
              onChange={this.handleEmail}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    );
  }
}

export default Login;
