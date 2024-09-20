import {ChangeEvent, FC, useState} from "react";

const Player:FC<PlayerInterface> = ({name, symbol, isActive}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [namePlayer, setNamePlayer]  = useState<string>(name);

    const playerName = !isEdit
        ? <span className="player-option">Player: {namePlayer}</span>
        : <input className="input" onChange={handleChangeName} value={namePlayer}/>

    function handleChangeName (event: ChangeEvent<HTMLInputElement>) {
            setNamePlayer(event.target.value)
    }

    function handleEditClick() {
        setIsEdit(prev => !prev)
    }

    return (
        <li className={isActive ? "player-active" : undefined}>
            <div className="player-wrapper">
                {playerName}
                <span className="player-option">Player Symbol: {symbol}</span>
            </div>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
};

export default Player;