import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken';
import Moment from 'react-moment';

export class Home extends Component {

    state={
        redirect: false,
        user: {}
    };

    componentDidMount(){

        const token = localStorage.getItem('example-app');

        if(token){
            setAuthToken(token)
        }

        axios.get('api/user')
        .then(response=>{
            this.setState({
                user: response.data
            })
        })
        .catch(err => console.log(err.response))
    }

    handleLogout = () =>{
        localStorage.removeItem('example-app');
        this.setState({
            redirect: true
        })
    }



    render() {

        const {redirect, user} = this.state;

        if(redirect){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Home</h1>
                <p>You have successfully authenticated</p>

                <p>Welcome, {user.firstName}</p>

                <a className="waves-effect waves-light btn red" onClick={this.handleLogout}>button</a>
            </div>
        )
    }
}

export default Home
