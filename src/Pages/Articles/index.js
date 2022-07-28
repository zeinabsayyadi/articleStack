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
const Articles = ()=>{
    const classes = useStyles();
    const {articlesList,currentUser} = useContext(contextsStore);
    const filterd = articlesList.filter(item=> item.authorId == currentUser.id);
    return (
        <Box mx='3%'className={classes.root} >
             <List >
            {filterd.map((article) =>(
                <ListItem key={article.id}  my={4} className={classes.items}>
                    <Article article={article} inArticlePage={false}/>
                </ListItem>
            ))}
            </List>
        </Box>
    )
};
export default Articles;