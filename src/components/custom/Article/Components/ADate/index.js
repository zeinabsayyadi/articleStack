import { Typography } from "@material-ui/core";
import React from "react";

const ADate = ({date})=>{
    const today = new Date()
    const current = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today);
    return(
        <Typography>
           {current}
        </Typography>
    )
};

export default ADate;