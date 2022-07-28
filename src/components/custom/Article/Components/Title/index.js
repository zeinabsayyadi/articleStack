import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { contextsStore } from "../../../../../Contexts";

const Title = ({subject})=>{
    const {currentArticle} = useContext(contextsStore);
    return (
        <Typography>
            {subject}
        </Typography>
    )
};

export default Title;