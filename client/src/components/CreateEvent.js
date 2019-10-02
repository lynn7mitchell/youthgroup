import React, { Component } from "react";

export class CreateEvent extends Component {
  state = {
    title: "",
    locationName: "",
    locationAddress: "",
    time: "",
    date: "",
    note: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" input-field col s12">
            <input
              id="title"
              type="text"
              className="validate"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className=" input-field col s6">
            <input
              id="title"
              type="text"
              className="datepicker"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
            <label htmlFor="title">Date</label>
          </div>
          <div className=" input-field col s6">
            <input
              id="title"
              type="text"
              className="timepicker"
              name="time"
              value={this.state.time}
              onChange={this.onChange}
            />
            <label htmlFor="title">Time</label>
          </div>
        </div>
        <div className="row">
          <div className=" input-field col s12">
            <input
              id="locationName"
              type="text"
              className="validate"
              name="locationName"
              value={this.state.locationName}
              onChange={this.onChange}
            />
            <label htmlFor="title">Place (name)</label>
          </div>
        </div>
        <div className="row">
          <div className=" input-field col s12">
            <input
              id="locationAddress"
              type="text"
              className="validate"
              name="locationAddress"
              value={this.state.locationAddress}
              onChange={this.onChange}
            />
            <label htmlFor="title">Address</label>
          </div>
        </div>
        <div className="row">
          <div className=" input-field col s12"></div>
        </div>
        <div className="row">
          <div className=" input-field col s12">
            <textarea
              onChange={this.onChange}
              value={this.state.note}
              name="note"
              id="note"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="note">Note</label>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
