import { alpha, Avatar, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { contextsStore } from "../../../../../Contexts";

const useStyles = makeStyles((theme)=>({
    root:{
        color:theme.palette.common.white,
        backgroundColor:alpha(theme.palette.secondary.main,0.25)
    }
}))
const Uavatar=()=>{
    const classes = useStyles();
    const {currentUser} = useContext(contextsStore);
    return(
        <Avatar className={classes.root}>
            {currentUser.username?currentUser.username[0]:' '}     
        </Avatar>
    )
};

export default Uavatar;