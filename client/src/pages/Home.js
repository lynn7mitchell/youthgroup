import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../images/logo.svg";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Tabs from "../components/basic/Tabs";
import Navbar from "../components/basic/Navbar"
export class Home extends Component {
  state = {
    redirect: false,
    user: {},
    isAdmin: false
  };

  componentDidMount() {
    // const token = localStorage.getItem("example-app");

    // if (token) {
    //   setAuthToken(token);
    // }

    axios
      .get("api/user")
      .then(response => {
        this.setState({
          user: response.data
        });
        if (this.state.user.role === "admin") {
          this.setState({
            isAdmin: true
          });
        }
      })
      .catch(err => console.log(err.response));
  }


  // handleLogout = () => {
  //   localStorage.removeItem("example-app");
  //   this.setState({
  //     redirect: true
  //   });
  // };

  render() {
    // if (checkbox.checked) {
    //   isAdmin === true;
    // } else if (!checkbox.checkbox) {
    //   isAdmin === false;
    // }

    const styles = {
      logo: {
        display: "block",
        margin: "0 auto",
        width: "50vw"
      }
    };
    // const { redirect, user } = this.state;

    // if (redirect) {
    //   return <Redirect to="/" />;
    // }
    
    return (

      <div>
        
        <img src={Logo} style={styles.logo} />
        <Tabs />
        <a href="/createannouncement">
          <i className="material-icons small add-event-icon">
            add_circle_outline
          </i>
        </a>
        <a onClick={this.handleLogout}>Log Out</a>

      </div>
    );
  }
}

export default Home;
