import React, { useState, useEffect } from "react";
import GameCircle from "./GameCircle";
import "../style.css";
import {
    GAME_STATE_DRAW,
    GAME_STATE_IDLE,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    NO_CIRCLES,
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2,
} from "../constants";
import Header from "./Header";
import Footer from "./Footer";
import { IsWinner, IsDraw } from "../GameLogic";
import GameTitle from "./GameTitle";

const GameBoard = () => {
    const [gameBoard, setgameBoard] = useState([]);
    const [currentPlayer, setcurrentPlayer] = useState(PLAYER_1);
    const [gameState, setgameState] = useState(GAME_STATE_IDLE);
    const [winPlayer, setwinPlayer] = useState();

    useEffect(() => {
        InitGameBoard();
    }, []);

    const InitGameBoard = () => {
        setcurrentPlayer(PLAYER_1);
        setgameBoard(Array(NO_CIRCLES).fill(NO_PLAYER));
        setgameState(GAME_STATE_PLAYING);
    };

    const InitBoard = () => {
        const circles = [];
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(<RenderCircle key={i} id={i} />);
        }
        return circles;
    };
    const OnCircleClicked = (props) => {
        if (gameBoard[props.id] !== 0) return NO_PLAYER;

        if (gameState !== GAME_STATE_PLAYING) return GAME_STATE_IDLE;

        if (IsWinner(gameBoard, props.id, currentPlayer)) {
            setgameState(GAME_STATE_WIN);
            setwinPlayer(currentPlayer);
        }

        if (IsDraw(gameBoard, props.id, currentPlayer)) {
            setgameState(GAME_STATE_DRAW);
            setwinPlayer(NO_PLAYER);
        }

        setgameBoard((prev) => {
            return prev.map((circle, pos) => {
                if (pos === props.id) {
                    return currentPlayer;
                }
                return circle;
            });
        });

        setcurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    };

    const RenderCircle = (props) => {
        return (
            <GameCircle
                id={props.id}
                class={`player_${gameBoard[props.id]}`}
                onClick={OnCircleClicked}
            />
        );
    };

    return (
        <>
            <GameTitle />
            <Header state={gameState} player={currentPlayer} win={winPlayer} />
            <Footer onNewGame={InitGameBoard}/>
            <div className="connectBoard">{InitBoard()}</div>
        </>
    );
};

export default GameBoard;
