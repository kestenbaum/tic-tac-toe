import {ChangeEvent, FC, useState} from "react";

const Player:FC<PlayerInterface> = ({name, symbol}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [namePlayer, setNamePlayer]  = useState<string>(name);

    let playerName = !isEdit
        ? <span className="player-name">Player: {namePlayer}</span>
        : <input className={"input"} onChange={handleChangeName} value={namePlayer}/>

    function handleChangeName (event: ChangeEvent<HTMLInputElement>) {
            setNamePlayer(event.target.value)
    }

    function handleEditClick() {
        setIsEdit(prev => !prev)
    }

    return (
        <>
            <li id="player">
                {playerName}
                <span className="player-symbol">Player Symbol: {symbol}</span>
            </li>
            <button onClick={handleEditClick}>Edit</button>
        </>
    );
};

export default Player;