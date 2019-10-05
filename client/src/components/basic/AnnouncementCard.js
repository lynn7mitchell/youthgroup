import React, { Component } from 'react'
import axios from 'axios'

export class Announcments extends Component {
    state={
        announcments:[]
    }

    componentDidMount(){
        axios.get('/api/announcements')
        .then(res => this.setState({announcments: res.data}))
        .catch(err => console.log(err.data))
    }
    render() {
       
        //Render announcements from the database using .map
        //Order anouncments by date

        //pin announcements to show up on top
        return (
            <div>
                {this.state.announcments.map(announcement => (
                  <div>
                    <div className="row">
                      <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                          <div className="card-content white-text">
                            <span className="card-title">{announcement.title}</span>
                            <p>{announcement.info}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 ))}
            </div>
        )
    }
}

export default Announcments
