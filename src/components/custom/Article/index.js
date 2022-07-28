import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Picture from './Components/Picture';
import ArticleHeader from './Components/ArticleHeader';
import Actions from './Components/Actions';
import {Box} from '@material-ui/core';
import Summery from './Components/Summery';
import Context from './Components/Context';

const useStyles = makeStyles((theme)=>({
  card:{
    hight:'50vh',
    width:'70%',
    paddingLeft:'1rem',
    paddingRight:'1rem'
  }

}))
export default function Article({article,inArticlePage}) {
  const current = article;
  const classes = useStyles();
  return (
    <Card  className={classes.card}>
      <ArticleHeader current={current}/>
     <Box>
     <Picture />
     </Box>
      <CardContent>
        <Summery summery={current.summery}/>
      </CardContent>
      <Actions current={current} inArticlePage={inArticlePage}/>
      <Box>
      {
            inArticlePage ? <Context context={current.context}/> : null
            }
      </Box>
      
    </Card>
  );
}
