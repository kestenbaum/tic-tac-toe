import {useState} from "react";
import Container from "./components/Container.tsx";
import GameBoard from "./components/GameBoard.tsx";
import Player from "./components/Player.tsx";
import Log from "./components/Log.tsx";
import GameOver from "./components/GameOver.tsx";

import {deriveActivePlayer} from "./helpers/deriveActivePlayer.ts";
import {INITIAL_BOARD, INITIAL_PLAYERS, WINNING_COMBINATIONS} from "./helpers/constant.ts";

function App() {
    const [gameTurns, setGameTurns] = useState<Turn[]>([]);
    const activePlayer = deriveActivePlayer<string>(gameTurns);
    const gameBoard:null[][] = [...INITIAL_BOARD.map(arr => [...arr])];
    let winner;
    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer:string = deriveActivePlayer(prevTurns);
            let updateTurns:Turn[] = [];

            updateTurns =  [
                {square: {col: colIndex, row: rowIndex}, player: currentPlayer},
                ...prevTurns
            ];
            return updateTurns;
        })
    }

    function handleResetBoard () {
        setGameTurns([])
    }

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = firstSquareSymbol;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    return (
        <>
            <Container>
                <ul id={"players"}>
                    <Player
                        name={INITIAL_PLAYERS.X}
                        symbol={"X"}
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        name={INITIAL_PLAYERS.O}
                        symbol={"O"}
                        isActive={activePlayer === "O"}
                    />
                </ul>
                {(winner || hasDraw) && <GameOver winner={winner} onReset={handleResetBoard}/>}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </Container>
            <Log turns={gameTurns} />
        </>
    )
}

export default App;
