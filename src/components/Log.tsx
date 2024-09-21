import {FC} from "react";

const Log:FC<Turn[]> = ({turns}: Turn[]) => {
    return (
        <ol id={"log"}>
            {turns.map(turn =>
                <li key={`${turn.square.col}${turn.square.row}`}>
                    Player "{turn.player}" selected X: {turn.square.row} Y: {turn.square.col};
                </li>)}
        </ol>
    );
};

export default Log;