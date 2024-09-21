import {FC} from "react";

const Container:FC<ContainerChild> = ({children}) => {
    return (
        <div id="game-container">
            {children}
        </div>
    );
};

export default Container;