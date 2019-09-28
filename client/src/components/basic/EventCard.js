import React from "react";

export default function EventCard(props) {
  console.log(props.events);
  return (
    <div>
      {props.events.map(event => {
        // <div className="card">
        //   <h3>{event.title}</h3>
        //   <h4>{event.creator}</h4>
        // </div>
      })}
    </div>
  );
}
