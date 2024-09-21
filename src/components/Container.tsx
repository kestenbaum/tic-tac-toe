import {FC, ReactNode} from "react";

interface ContainerChild {
    children: ReactNode
}

const Container:FC<ContainerChild> = ({children}) => {
    return (
        <div id="game-container">
            {children}
        </div>
    );
};

export default Container;