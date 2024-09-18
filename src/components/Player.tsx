import {FC} from "react";
import {PlayerInterface} from "../../@types";

const Player :FC<PlayerInterface> = ({name, symbol}) => {
    return (
        <>
            <li className="player">
                <span className="player-name">Player: {name}</span>
                <span className="player-symbol">Player Symbol: {symbol}</span>
            </li>
            <button>Edit</button>
        </>
    );
};

export default Player;