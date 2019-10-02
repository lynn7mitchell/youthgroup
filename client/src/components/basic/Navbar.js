import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import setAuthToken from "../../utils/setAuthtoken";
export class Navbar extends Component {

  state = {
      redirect: false,
      user: {}
    };
  
  componentDidMount() {
    const token = localStorage.getItem("example-app");

    if (token) {
      setAuthToken(token);
    }

    axios
      .get("api/user")
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(err => console.log(err.response));
  }

  render() {
    const style={
      nav:{
          background: "#333",
          display: 'none'
      },
      center:{
        display: "flex"
      },
      navMainIcon:{
        color: "#333",
        margin: "0 auto",
      },
      welcome:{
        marginLeft:"25px",
      }
  }

  
    return (
      <div>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
        <nav style={style.nav}>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a onClick={this.handleLogout}>Log Out</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li style={style.center}>
           <i className="material-icons large" style={style.navMainIcon}>account_circle</i>
          </li>
          <li>
           <h6 style={style.welcome}> <strong>Welcome, {this.state.user.firstName}</strong> </h6>
          </li>
          <hr/>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a onClick={this.handleLogout}>Log Out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
