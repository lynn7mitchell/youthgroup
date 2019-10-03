import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getTime } from "date-fns/esm";

export class CreateEvent extends Component {
  state = {
    title: "",
    locationName: "",
    locationAddress: "",
    time: new Date(),
    startDate: new Date(),
    note: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(document.getElementsByClassName("year-text"));
  };

  onDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  onTimeChange = date => {
    this.setState({
      time: date
    });
  };
   render() {
    return (
      <div>
        <h3 className="subheader">Create an Event</h3>

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
              <div>
                <label>Select Date</label>
                <DatePicker
                  showYearDropdown
                  selected={this.state.startDate}
                  onChange={this.onDateChange}
                />
              </div>
            </div>
            <div className=" input-field col s6">
            <div>
            <label>Select Time</label>
            <DatePicker
              selected={this.state.time}
              onChange={this.onTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
            />
            </div>
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
      </div>
    );
  }
}

export default CreateEvent;
