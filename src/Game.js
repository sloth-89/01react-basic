import React, { useReducer } from "react";
import "./game.css";

function gameReducer(state, action){
    
}

function Board(){
    // useReducer(reducer업데이트 함수, state 초기값)
    const [state, dispatch] = useReducer(gameReducer, {squares: Array(9).fill(null), xIsNext: true})

    const {squares, xIsNext} = state;

    function renderSquare(index){
        return(
            <button className="square" onClick={()=>{selectSquare(index)}}>
                {squares[index]}
            </button>
            <button></button>
        )
    }

    function selectSquare(square){
        dispatch({type: "SELECT_SQUARE", square})
    }
    
    const status = getStatus(squares, xIsNext)
}

function Game(){

    return(
        <div>
            <Board/>
        </div>
    )
}

export default Game;