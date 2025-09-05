import React, { useState } from 'react'

const Player = ({ initialName, symbol, isActive, updatePlayerName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    }
    const handleEditClick = () => {
        setIsEditing((editing) => !editing)
        if (isEditing) {
            updatePlayerName(symbol, playerName)
        }
    }

    let playerNameDiv = <span className="player-name">{playerName}</span>
    if (isEditing) {
        playerNameDiv = <input type='text' value={playerName} onChange={handleInputChange}></input>
    }



    return (
        <li className={isActive ? "active" : undefined}  >
            <span className="player">
                {playerNameDiv}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player