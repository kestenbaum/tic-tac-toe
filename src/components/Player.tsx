import {FC} from "react";
import {PlayerInterface} from "../../@types";

const Player :FC<PlayerInterface> = ({name, symbol}) => {
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

export default Player;