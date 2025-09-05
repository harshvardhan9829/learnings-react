import React from 'react'

const GameOver = ({ winner, onRestart, players }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{players[`${winner}`]} won</p>}
            {!winner && <p>It&apos;s a draw!</p>}
            <p><button onClick={onRestart}>Rematch!</button></p>
        </div>
    )
}

export default GameOver