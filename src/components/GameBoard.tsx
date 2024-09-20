import {useState} from "react";
import {INITIAL_BOARD} from "../helpers/Constant.ts";

const GameBoard = ({onSelectSquare, activePlayerSymbol}) => {
    const [board, setBoard] = useState(INITIAL_BOARD);
    function handleSelectSquare (rowIndex, colIndex) {
        setBoard((prevState) => {
            const updateBoard = [...prevState.map(array => [...array])];
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard;
        });

        onSelectSquare();
    }

    return (
        <div id={"game-board"}>
            {board.map((row, rowIndex) =>
                <ol key={rowIndex}>
                    {row.map((playerSymbol, colIndex) =>
                    <button
                        key={colIndex}
                        className={"game-button"}
                        onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    >{playerSymbol}
                    </button>
                )}</ol>)
            }
        </div>
    );
};

export default GameBoard;