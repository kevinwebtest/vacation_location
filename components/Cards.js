import React from "react"

export default function Cards(props) {
    return (
        <div>
            <div className="cards">
                <img src={props.imageUrl} className="cards--img" />
                <img src="https://img.icons8.com/color/512/marker.png" className="locationIcon" />
                <span className="cards--location">{props.location}</span>
                <span><a href={props.googleMaps} className="cards--link">View on Google Maps</a></span>
                <h1 className="cards--title">{props.title}</h1>
                <h4 className="cards--date">{props.startDate} - {props.endDate}</h4>
                <p className="cards--description">{props.description}</p>
            </div>
            <hr />
        </div>
    )
}