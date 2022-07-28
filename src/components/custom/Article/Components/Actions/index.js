import { ButtonBase, CardActions, IconButton, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom'
import { contextsStore } from "../../../../../Contexts";
const useStyles = makeStyles((theme)=>({
  button:{
    color: theme.palette.secondary.main
  }
}))

const Actions = ({current,inArticlePage})=>{
  const classes = useStyles();
  const handleLikeArtilce = ()=>{
    console.log('handle Like Article');
  }
    return(
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeArtilce}>
          <FavoriteIcon />
        </IconButton>
        <ButtonBase
        className={classes.button}
        >{ inArticlePage ?null : 
          <Link to={`/signleArticles/${current.id}`} key={current.id}>
                            more
                        </Link>}
        </ButtonBase>
      </CardActions>
    )
};

export default Actions;