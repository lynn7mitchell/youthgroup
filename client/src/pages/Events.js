import React, { Component } from 'react'
import API from "../utils/API"
import EventCard from '../components/basic/EventCard'

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
                <EventCard events={this.state.events}/>
            </div>
        )
    }
}

export default Events
