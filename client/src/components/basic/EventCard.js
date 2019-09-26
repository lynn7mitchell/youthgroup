import React from 'react'

export default function EventCard(props) {
    return (
        <div>
            <div className="card">
                <h3>{props.title}</h3>
                <h4>{props.creator}</h4>
            </div>
        </div>
    )
}
