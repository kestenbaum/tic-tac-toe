import {FC} from "react";
import {Container} from "../../@types";

const Container:FC<Container> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;