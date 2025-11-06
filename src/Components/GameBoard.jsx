

export default function GameBoard({ onSelectSqaure, board }) {

  

  // const [gameBoard,setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex,colIndex){
  //   setGameBoard((prevGameBoard) => {
  //   const updatedBoard =[...prevGameBoard.map(innerArray  => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSqaure();
  // };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSqaure(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
