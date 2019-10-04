import React from "react";
import Moment from "react-moment"

export default function EventCard(props) {
  console.log(props.events);
  return (
    <div>
      {props.events.map(event => (
        <div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{event.title}</span>
                  <p><strong>When:</strong> <Moment format="MMMM Do">{event.date}</Moment> @ <Moment format="h:mm">{event.locationTime}</Moment></p>
                  <p><strong>Where:</strong> {event.locationName}</p>
                  <p><strong>Address:</strong> {event.locationAddress}</p>

                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
