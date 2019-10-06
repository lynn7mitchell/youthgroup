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
    
//     //  state={
//     events:{}
// }

// componentDidMount(){
//   axios.get('/api/events')
//   .then(response =>{
//     this.setState({
//       events: response.data
//     })
//   })
//   .catch(err => console.log(err))
// }

    render() {
        return (
            <div>
                <h3 className="subheader">Events</h3>
                <EventCard events={this.state.events}/>
                <Link to="/createevent"><i className="material-icons small add-event-icon">add_circle_outline</i></Link>


            </div>
        )
    }
}

export default Events
