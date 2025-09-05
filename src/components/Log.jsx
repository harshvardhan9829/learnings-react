import React from 'react'

const Log = ({ turns }) => {


    return (
        < ol id="log" >
            {turns.map((turn) => <li key={`${turn.square.row}${turn.square.col}-${turn.player}`}>{turn.player} selected column: {turn.square.col + 1}, of {turn.square.row + 1} row</li>)}
        </ol >

    )
}

export default Log