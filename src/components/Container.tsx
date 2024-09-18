import {FC} from "react";
import {ContainerInterface} from "../../@types";

const Container:FC<ContainerInterface> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;