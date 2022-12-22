import {useContext} from "react";
import dataContext from "./context";

const UseContext = () => {

    const {name} = useContext(dataContext);
    const {email} = useContext(dataContext);

    return (
        <span> By: {name}{email()} </span>
    )
}

export default UseContext;