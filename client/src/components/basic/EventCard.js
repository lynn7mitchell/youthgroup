import React from "react";

export default function EventCard(props) {

  const onClick = e =>{
    if (e.target.classList.contains('selectedIcon')){
      e.target.classList.remove('selectedIcon')
    }else{
    e.target.classList.add('selectedIcon')
    }

    if (e.target.parentNode.classList.contains('selectedCard')){
      e.target.parentNode.classList.remove('selectedCard')
    }else{
    e.target.parentNode.classList.add('selectedCard')
    }

   
  }

  console.log(props.events);
  return (
    <div>
      <div className="row">
        <div className="card event-card col s10 offset-s1 event-grid">

            <i className="material-icons medium">account_circle</i>
            <div>
              <h4>Title</h4>
              <p>
              October 11 @ 12:30 pm
              </p>
            </div>
          
          <i className="material-icons small expand" onClick={onClick}>expand_more</i>
        </div>
      </div>
    </div>
  );
}
