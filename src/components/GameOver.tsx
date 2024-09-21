const GameOver = ({winner, onReset}) => {
    let playerWinner = winner
        ? <p>{winner} won!</p>
        : <p>Has draw!</p>

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {playerWinner}
            <p>
                <button onClick={onReset}>Rematch!</button>
            </p>
        </div>
    );
};

export default GameOver;