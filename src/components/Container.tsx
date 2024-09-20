import {FC, ReactNode} from "react";

const Container:FC<ReactNode> = ({children}: ReactNode) => {
    return (
        <div id="game-container">
            {children}
        </div>
    );
};

export default Container;