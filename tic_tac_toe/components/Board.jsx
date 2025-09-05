import React, { useState } from 'react'
import Square from './Square'
import Style from './board.module.css'
const Board = ({ squares }) => {
    const [value, setValue] = useState(null);
    const handleClick = () => {
        const nextSquares = squares.slice();
        nextSquares[0] = "X";
        setSquares(nextSquares)
    }
    return (
        <div>
            <div className={Style.board_row}>
                <Square value={squares[0]} />
                <Square value={squares[1]} onSquareClick={handleClick} />
                <Square value={squares[2]} />
            </div>
            <div className={Style.board_row}>
                <Square value={squares[3]} />
                <Square value={squares[4]} />
                <Square value={squares[5]} />
            </div>
            <div className={Style.board_row}>
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
            </div>
        </div>
    )
}

export default Board