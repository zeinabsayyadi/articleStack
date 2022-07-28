import { ThemeContext } from "@emotion/react";
import { Box, CircularProgress, makeStyles} from "@material-ui/core";
import React, { useContext } from "react";
import { contextsStore } from "../../../Contexts";
const useStyles = makeStyles((theme)=>({
    root:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'transparent',
        position:'fixed',
        zIndex:4,
    }
}))
const Loader = ()=>{
    const classes = useStyles();
    const {loading} = useContext(contextsStore);
    return (
        <Box 
        my='50%'
        mx='50%'
        className={classes.root}
        display={loading?'flex':'none'}
        >
            <CircularProgress color="secondary" />
        </Box>
    )
};

export default Loader;