import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }
  return currentPlayer;
}


const App = () => {
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map(arr => [...arr])]; // copying  array with array inside the array 
  for (const turn of gameTurns) {
    const { square, player } = turn;

    const { row, col } = square;
    gameBoard[row][col] = player
  }
  const handleResetGame = () => {
    console.log("restart hit");
    setGameTurns([]);
    console.log(gameTurns);
  }
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = derivedActivePlayer(gameTurns);
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
      winner = firstSquareSymbol
    }


  }

  const hasDrawn = gameTurns.length == 9 && !winner;


  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns)
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex }, player: currentPlayer
        }, ...prevTurns
      ]

      return updatedTurns
    })



  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDrawn) && <GameOver winner={winner} onRestart={handleResetGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App