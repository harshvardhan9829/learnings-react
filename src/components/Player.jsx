import React, { useState } from 'react'

const Player = ({ initialName, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    }
    const handleEditClick = () => {
        setIsEditing((editing) => !editing)
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