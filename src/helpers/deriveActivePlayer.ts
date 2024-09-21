export function deriveActivePlayer (array:Turn[]) {
    let currentPlayer = "X";

    if (array.length > 0 && array[0].player === "X") {
        currentPlayer = "O"
    }

    return currentPlayer;
}