import React from "react";
import {Box, Grid} from "@material-ui/core";
import Header from "../Header";
import Sidebar from "../SidePanel";

const Layout =(props)=>{
    return (
        <Grid container spacing={2}>

            <Grid item>
                <Header/>
            </Grid>
            <Grid container item spacing={3} >
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}
                >
                    <Box marginBottom='240px' position='relative'>
                        {props.children}
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Layout;