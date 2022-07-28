import React, { useContext } from "react";
import Article from "../../components/custom/Article";
import { contextsStore } from "../../Contexts";
import {Box, List, ListItem, makeStyles} from '@material-ui/core';

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
        
    }
}))
const Home = ()=>{
    const classes = useStyles();
    const {articlesList} = useContext(contextsStore);
    return (
        <Box mx='3%'className={classes.root} >
             <List >
            {articlesList.map((article) =>(
                <ListItem key={article.id}  my={4} className={classes.items}>
                    <Article article={article} inArticlePage={false}/>
                </ListItem>
            ))}
            </List>
        </Box>
    )
};
export default Home;