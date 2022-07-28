import { CardMedia, makeStyles } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import galexy from '../../../../../assets/pics/galexy.jpg'
import { contextsStore } from "../../../../../Contexts";
const useStyles = makeStyles((theme)=>({
    media: {
        width:'inherit',
        paddingTop: '56.25%', // 16:9
        borderRadius:'0.2rem'
      }
}))
const Picture = ()=>{
    const classes = useStyles();
    const {currentArticle} = useContext(contextsStore);
    return (
        <CardMedia
        className={classes.media}
        image={galexy}
      />
    )
};

export default Picture;