import React from 'react'
import style from "./square.module.css"
const Square = ({ value, onSquareClick }) => {
    return (
        <>
            <button className={style.square} onClick={onSquareClick}>{value}</button>
        </>
    )
}

export default Square