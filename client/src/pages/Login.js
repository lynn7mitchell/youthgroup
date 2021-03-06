import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Logo from "../images/logo.svg";
import authenticate from "../utils/Authenticate";
import setAuthToken from "../utils/setAuthtoken";

export class Login extends Component {

    constructor(){
        super();
        this.state={
            redirect: false,
            email: '',
            password: '',
            errors:{}
        }
    }
    componentDidMount(){
      const token = localStorage.getItem('example-app');

      if(authenticate(token)){
        this.setState({
          redirect: true
        })
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

          if (response.data.token){
            const {token} = response.data;

            localStorage.setItem('example-app', token);
            setAuthToken(token);
          }
          this.setState({
            redirect: true,
            errors: {}
          })
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
            margin: "0 auto",
            width: "28vw",
            paddingTop: "2rem"
           
        },
        
        
        error:{
          color: "#cc0000",
          fontSize: "0.8rem",
          margin: 0,
          
        }

        
    };

    const {errors} = this.state;

    if(this.state.redirect){
      return <Redirect to="/home"/>
    }
    return (
      <div>
        <img src={Logo} className="logo" style={styles.logo} />
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.onChange}/>
                  <label htmlFor="email">Email</label>
                </div>
                {errors.user && (
                        <div style={styles.error}>
                            {errors.user}
                        </div>
                    )}
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.onChange}/>
                  <label htmlFor="password">Password</label>
                </div>
                {errors.password && (
                        <div style={styles.error}>
                            {errors.password}
                        </div>
                    )}
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
              <div className="row">
                <p>Don't have an account? <a href="/SignUp">Click here to sign up!</a></p>
              </div>
              <div className="row">
                <div className="col s6">
                <p>admin login:</p>
                <p>Email: admintest@gmail.com</p>
                <p>Password: admintest</p>
                </div>
                <div className="col s6">
                <p>student login:</p>
                <p>Email: studenttest@gmail.com</p>
                <p>Password: studenttest</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
