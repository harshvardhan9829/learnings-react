import { useState } from "react"
import Styles from "./tiktaktoe.module.css"
import Square from "./components/Square";
import Board from "./components/Board";
const TikTakToe = () => {
  const [squares, setSqaures] = useState([Array(9).fill(null)])



  return (
    <>
      <div className={Styles.container}>
        <section>
          <div className="heading">Tik Tac Toe</div>
        </section>
        <section className={Styles.game_head}>
          <button className="primary_button">New game</button>
          <button className="reset_button">X</button>
        </section>
        <Board squares={squares} />
      </div>
    </>
  )
}

export default TikTakToe