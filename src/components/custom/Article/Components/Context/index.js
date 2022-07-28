import { CardContent } from "@material-ui/core";
import React, { useContext } from "react";
import { contextsStore } from "../../../../../Contexts";

const Context = ({context})=>{
    const {inArticlePage} = useContext(contextsStore);
    return(
        <CardContent>
             {context}
        </CardContent>
    )
};
export default Context;