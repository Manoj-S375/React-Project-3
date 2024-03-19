import React from "react";
import "../style.css";

const GameCircle = (props) => {
    return (
        <div
            className={`gameCircles ${props.class}`}
            onClick={() => props.onClick(props)}
        />
    );
};

export default GameCircle;
