interface PlayerInterface {
    name: string,
    symbol: string
    isActive?: boolean
}

interface PlayersSymbolInterface {
    "X": string,
    "O": string
}

interface Turn {
    square: {
        row: string | number,
        col: string | number
    },
    player: string
}

interface GameOverInterface {
    winner: string,
    onReset: () => void
}

interface GameBoardInterface {
    board: null[][],
    onSelectSquare: (row:number, col:number) => void;
}

interface WinningCombinationsInterface {
    row: number,
    column: number
}
