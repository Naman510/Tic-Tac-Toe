import Square from "./Square.jsx"
function Board({xIsNext,square,onPlay}) {
  function handleClick(i){
    if(square[i] || declareResult(square))return;
    const newSquare=square.slice();
    if(xIsNext)
    newSquare[i]='X';
    else 
    newSquare[i]='O';
    onPlay(newSquare);
  }

  const winner=declareResult(square);
  let status;
  if(winner){
    status=winner+" is winner"
  }
  else{
    status=(xIsNext?"X":"O")+"'s turn";
  }
  return (
    <>
    <h1 className="status">{status}</h1>
    <div className="board-row">
  <Square value={square[0]} valueOnClick={()=>handleClick(0)}/>
  <Square value={square[1]} valueOnClick={()=>handleClick(1)}/>
  <Square value={square[2]} valueOnClick={()=>handleClick(2)}/>
  </div>
  <div className="board-row">
  <Square value={square[3]} valueOnClick={()=>handleClick(3)}/>
  <Square value={square[4]} valueOnClick={()=>handleClick(4)}/>
  <Square value={square[5]} valueOnClick={()=>handleClick(5)}/>
  </div>
  <div className="board-row">
  <Square value={square[6]} valueOnClick={()=>handleClick(6)}/>
  <Square value={square[7]} valueOnClick={()=>handleClick(7)}/>
  <Square value={square[8]} valueOnClick={()=>handleClick(8)}/>
  </div>
  </>);
}
export default Board;

function declareResult(square){
  const arr=[
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,5,8],
    [2,5,7]
  ]
  for(let i=0;i<arr.length;i++){
    const [a,b,c]=arr[i];
    if(square[a] && square[a]===square[b] && square[a]===square[c])return square[a];
  }
  return null;
}