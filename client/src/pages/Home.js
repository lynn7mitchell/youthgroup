import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../images/logo.svg";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Navbar from '../components/basic/Navbar'
import Tabs from '../components/basic/Tabs'
export class Home extends Component {
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

  handleLogout = () => {
    localStorage.removeItem("example-app");
    this.setState({
      redirect: true
    });
  };



  render() {

    const styles={
        logo:{
            display: "block",
            margin: "0 auto",
            width: "50vw"

        },
    }
    const { redirect, user } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <img src={Logo} style={styles.logo} />
        <Tabs/>
       
      </div>
    );
  }
}

export default Home;
