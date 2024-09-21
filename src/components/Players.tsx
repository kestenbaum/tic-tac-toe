import Player from "./Player.tsx";
import {INITIAL_PLAYERS} from "../helpers/constant.ts";

const Players = () => {
    return (
        <ul id={"players"}>
            <Player name={INITIAL_PLAYERS.X} symbol={"X"}/>
            <Player name={INITIAL_PLAYERS.O} symbol={"O"}/>
        </ul>
    );
};

export default Players;