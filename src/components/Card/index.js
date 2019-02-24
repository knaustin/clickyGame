import React from "react";
import "./Card.css";


function Card(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
            </div>
        </div>
    );
}

export default Card;
