import React from "react";
import {Box, Grid} from "@material-ui/core";
import Header from "../Header";
import Sidebar from "../SidePanel";
import useStyle from "../Header/Header.Styles";

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
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Layout;