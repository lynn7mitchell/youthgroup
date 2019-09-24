import React, { Component } from 'react'
import API from "../utils/API"
import AddEvent from '../components/CreateEvent';

export class Events extends Component {
    state={
        events: []
    }

    componentDidMount(){
        API.getEvents()
        .then(res => this.setState({events: res.data}))
        .catch(err => console.log(err.data))
    }
    // Route to the add CreateEvent component (button)

    // Render Events from the database using .map
    
    
    render() {
        return (
            <div>
                <h1>Events</h1>
            </div>
        )
    }
}

export default Events
