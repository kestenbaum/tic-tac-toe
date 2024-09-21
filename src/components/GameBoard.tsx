import {FC} from "react";

const GameBoard:FC<GameBoardInterface> = ({onSelectSquare, board}) => {
    return (
        <ol id={"game-board"}>
            {
                board.map((row, rowIndex) =>
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) =>
                                <li key={colIndex}>
                                    <button
                                        className={"game-button"}
                                        disabled={playerSymbol !== null}
                                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    >{playerSymbol}
                                    </button>
                                </li>
                            )}</ol>
                    </li>)
            }
        </ol>
    );
};

export default GameBoard;