import { Box, ListItem, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import Article from "../../components/custom/Article";
import { contextsStore } from "../../Contexts";

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:'5rem',
        justifyContent:'center',
        backgroundColor:theme.palette.common.white
    },
    items:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
        paddingTop:'1rem',
    }
}));
const SingleArticlePage = ()=>{
    const classes = useStyles();
    const params = useParams();
    const {articlesList} = useContext(contextsStore);
    const filterd = articlesList.filter((item)=> item.id == params.SingleArticlePage );
    const current = filterd[0];
    return(
        <Box className={classes.root}>
            <ListItem className={classes.items}>
                <Article article={current} inArticlePage={true}  />
            </ListItem> 
        </Box>
        
    )
};
export default SingleArticlePage;