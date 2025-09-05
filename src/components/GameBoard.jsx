

const GameBoard = ({ onSelectSquare, gameBoard }) => {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard
    //     })
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => { onSelectSquare(rowIndex, colIndex) }}
                                        disabled={playerSymbol !== null}

                                    >{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
};

export default GameBoard;
