import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuthtoken";
import MenuOpen from "../../images/menu-open.svg";
import AdminSwitch from "./AdminSwitch"
export class Navbar extends Component {
  state = {
    redirect: false,
    user: {},
    isAdmin: false,
    displayAdmin: true
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
        if(this.state.user.role === "admin"){
          this.setState({
            isAdmin: true
          })
        }
      })
      .catch(err => console.log(err.response));
  }
  handleLogout = () => {
    localStorage.removeItem("example-app");
    this.setState({
      redirect: true
    });
  };

  render() {
    const style = {
      menu: {
        marginLeft: "10px",
        marginTop: "5%",
        width: "3vh"
      },
      center: {
        display: "flex"
      },
      navMainIcon: {
        color: "#333",
        margin: "0 auto"
      },
      welcome: {
        marginLeft: "25px"
      }
    };
    const { redirect, user } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    const adminSwitch = () =>{
      if(this.state.isAdmin){
        return <AdminSwitch isAdmin = {this.state.isAdmin}/>
      }
    }
    
    return (
      <div>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <img src={MenuOpen} alt="menu-open-toggle" style={style.menu} />
        </a>

        <ul className="sidenav" id="mobile-demo">
          <li style={style.center}>
            <i className="material-icons large" style={style.navMainIcon}>
              account_circle
            </i>
          </li>
          <li>
            <h6 style={style.welcome}>
              {" "}
              <strong>Welcome, {this.state.user.firstName}</strong>{" "}
            </h6>
          </li>
          <hr />
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
          {adminSwitch()}

        </ul>

        <div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
