
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
        row: number ,
        col: number
    },
    player: string | null
}

interface LogInterface {
    turns: Turn[]
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

interface ContainerChild {
    children: React.ReactNode
}
