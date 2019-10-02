import React, { Component } from "react";
import Logo from "../images/logo.svg";
import axios from "axios";

export class SignUp extends Component {



    state={
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }


    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = e =>{
        e.preventDefault();

        const newUser={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }


        axios.post('api/user', newUser)
        .then(console.log(newUser))
        .catch(err => console.log(err))
    }

  render() {
    const styles = {
      logo: {
        display: "block",
        margin: "0 auto",
        paddingBottom: "15px",
        width: "28vw"

      }
    };
    return (
      <div>
        <img src={Logo} style={styles.logo} />
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="First Name"
                    id="first_name"
                    type="text"
                    className="validate"
                    name="firstName"
                    onChange={this.onChange}
                  />
                  <label htmlFor="last_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    placeholder="Last Name"
                    id="first_name"
                    type="text"
                    className="validate"
                    name="lastName"

                    onChange={this.onChange}
                  />
                  <label htmlFor="first_name">Last Name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Email"
                    id="email"
                    type="email"
                    className="validate"
                    name="email"

                    onChange={this.onChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Password"
                    id="password"
                    type="password"
                    className="validate"
                    name="password"

                    onChange={this.onChange}
                  />
                  <label htmlFor="password">Password</label>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
