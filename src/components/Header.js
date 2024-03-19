import React from "react";
import {
    GAME_STATE_DRAW,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
} from "../constants";

const Header = (props) => {
    const RenederLabel = () => {
        switch (props.state) {
            case GAME_STATE_PLAYING:
                return <div>Player - {props.player}'s Turn</div>;
            case GAME_STATE_DRAW:
                return <div>Game is draw</div>;
            case GAME_STATE_WIN:
                return <div>Player - {props.win} won </div>;
        }
    };
    return (
        <div className="panel header">
            <div className="header-text">{RenederLabel()}</div>
        </div>
    );
};

export default Header;
