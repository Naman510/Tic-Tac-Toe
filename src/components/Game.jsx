import {useState} from "react";
import Board from "./Board.jsx"
export default function Game(){
  const [history,setHistory]=useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove]=useState(0);
  const xIsNext=currentMove%2===0;
  const square=history[currentMove];
  function handlePlay(nextSquare){
      const nextHistory=[...history.slice(0,currentMove+1),nextSquare]
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length-1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);

  }
  const moves=history.map((square,move)=>{
    let description;
    if(move===0){
      description="Go to start";
    }
    else{
      description="Go to move # "+move;
    }
    return (
      <li key={move}>
        <button onClick={()=>jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={square} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

