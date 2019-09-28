import React, { Component } from "react";
import Logo from "../images/412-Logo-copy.png";

export class Login extends Component {

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            errors:{}
        }
    }

  render() {
    const imageStyle = {
      display: "block",
      margin: "0 auto"
    };
    return (
      <div>
        <img src={Logo} style={imageStyle} />
        <div className="container">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
