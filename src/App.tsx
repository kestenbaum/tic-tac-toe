import {useState} from "react";
import Container from "./components/Container.tsx";
import GameBoard from "./components/GameBoard.tsx";
import Player from "./components/Player.tsx";
import Log from "./components/Log.tsx";

import {INITIAL_PLAYERS} from "./helpers/Constant.ts";

function App() {
    const [gameTurns, setGameTurns] = useState([])
    const [activePlayer, setActivePlayer] = useState<string>("X");

    function handleSelectSquare( rowIndex, colIndex) {
        setActivePlayer((prevState) => prevState === "X" ? "O" : "X");
        setGameTurns(prevTurn => {
            let currentPlayer = "X";

            if (prevTurn.length > 0 && prevTurn[0].player === "X") {
                currentPlayer = "O"
            }
            return [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex
                    },
                    player: currentPlayer
                },
                ...prevTurn
            ];
        })
    }

    return (
        <Container>
            <ul id={"players"}>
                <Player name={INITIAL_PLAYERS.X} symbol={"X"} isActive={activePlayer === "X"}/>
                <Player name={INITIAL_PLAYERS.O} symbol={"O"} isActive={activePlayer === "O"}/>
            </ul>
            <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
            <Log turns={gameTurns}/>
        </Container>
  )
}

export default App;
