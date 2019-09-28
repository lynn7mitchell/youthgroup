import React, { Component } from "react";
import axios from 'axios'
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

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e =>{
        e.preventDefault();

        const newUser={
            email: this.state.email,
            password: this.state.password
        }

        axios.post("/api/user/login", newUser)
        .then(response =>{
            console.log(response.data)
        })
        .catch(err => 
                this.setState({
                    errors: err.response.data
                })
            )
    }
  render() {
    const styles = {
        logo:{
            display: "block",
            margin: "0 auto"
        }
    };

    const {errors} = this.state
    return (
      <div>
        <img src={Logo} style={styles.logo} />
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.onChange}/>
                  <label htmlFor="email">Email</label>
                </div>
                {
                    errors.password && (
                        <div style={styles.error}>
                            {errors.password}
                        </div>
                    )
                }
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.onChange}/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
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
