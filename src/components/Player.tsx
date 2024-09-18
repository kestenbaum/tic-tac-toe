import {FC} from "react";
import {Player} from "../../@types";

export const Player :FC<Player> = ({name, symbol}) => {
    return (
        <div className="player">
            <div className="wrapper__name">
                <span>Player: </span>
                <span className="player__name">{name}</span>
            </div>
            <div className="wrapper__name">
                <span>Player Symbol: </span>
                <span className="player__name">{symbol}</span>
            </div>
        </div>
    );
};

