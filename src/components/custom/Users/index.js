import { Box } from "@material-ui/core";
import React, { useContext } from "react";
import { contextsStore } from "../../../Contexts";
 const User = ()=>{
    const {currentUser} = useContext(contextsStore)
    return (
        <Box my='5rem' mx='5rem'>
            <p>Im not sure to make a page for the user profile </p>
        </Box>
    )
 };

 export default User;