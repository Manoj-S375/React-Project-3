import React from "react";

const Footer = ({ onNewGame}) => {
    return (
        <div className="panel footer">
            <button onClick={onNewGame}>New Game</button>
        </div>
    );
};

export default Footer;
