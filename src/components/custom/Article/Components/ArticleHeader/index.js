import { CardHeader, IconButton, Menu, MenuItem } from "@material-ui/core";
import React, { useContext, useState } from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Uavatar from "../../../Users/Components/Uavatar";
import ADate from "../ADate";
import Title from "../Title";
import {NavLink} from 'react-router-dom';
import { contextsStore } from "../../../../../Contexts";
import axios from 'axios';
const ArticleHeader =({current})=>{
  const {currentArticle,setCurrentArticle,isDelete,setIsDelete,currentUser} = useContext(contextsStore);
  const [anchorEl, setAnchorEl] = useState('');
  console.log('current',current);
  const handleMoreVert =(e)=>{
    setAnchorEl(e.currentTarget);
    setCurrentArticle(current);
  };
  const handleDelete = ()=>{
    console.log(current.id);
    axios.delete(`https://62de61cc9c47ff309e71cc65.mockapi.io/api/articlestack/article/${current.id}`)
   .then((res) => {
      console.log({res});
      setIsDelete(!isDelete);
    }).catch(ex=>console.log({ex}))
  }
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
        <CardHeader
        avatar={
         <Uavatar auther={current.author}/>
        }
        action={
          currentUser.id == current.authorId ?
          <>
          <IconButton aria-label="more" 
          onClick={handleMoreVert} 
          aria-haspopup="true"
          aria-controls="long-menu"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu 
          
          anchorEl={anchorEl} 
          onClose={handleClose} 
          open={open}>
            <NavLink to='/Edite'>
              <MenuItem>Edite</MenuItem>
            </NavLink>
            <NavLink to='/Articles'>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </NavLink>
          </Menu>
          </> : ''
        }
        title={
          <Title subject={current.subject}/>
        }
        subheader={
          <ADate date={current.date}/>
        }
      />
  )
};
export default ArticleHeader;