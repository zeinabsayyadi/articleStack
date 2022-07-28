import { makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { contextsStore } from "../../../../../Contexts";
const useStyles = makeStyles((theme)=>({
    root:{
        color:theme.palette.secondary.main
    }
}));
const UserName = ()=>{
    const {currentUser} = useContext(contextsStore);
    console.log('currentuseriii',currentUser);
    const classes = useStyles();
    return (
        <Typography className={classes.root}>
            {currentUser.username?currentUser.username:'gest'}
        </Typography>
    )
};
export default UserName;