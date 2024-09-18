import {FC} from "react";
import {ContainerInterface} from "../../@types";

const Container:FC<ContainerInterface> = ({children}) => {
    return (
        <div id="game-container">
            {children}
        </div>
    );
};

export default Container;