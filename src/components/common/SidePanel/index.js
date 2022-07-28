import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import Uavatar from "../../custom/Users/Components/Uavatar";
import UserName from "../../custom/Users/Components/UserName";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import {NavLink } from 'react-router-dom'
import useStyles from "./SidePanel.style";
import { contextsStore } from "../../../Contexts";
const Sidebar = ()=>{
    const classes = useStyles();
    const {isLogedIn,setIsLogedIn,userStatus,setUserStatus,setCurrentUser} = useContext(contextsStore)
    const goToProfile = ()=>{
        console.log('go to profile');
    };
    const handleSignOut = ()=>{
      setIsLogedIn(!isLogedIn);
      setCurrentUser({});
      setUserStatus('usual');
    }
    return (
      <Box
      className={classes.root}
      >
        <Box
            className={classes.side}
            variant="permanent"
            anchor="left"
            marginRight='0'
          >
            <Box className={classes.drawer}
            variant="permanent"
            />
           <NavLink to='/profile' >
           <ListItem 
           className={classes.profile}
           my='1rem'
            onClick={goToProfile}
            >
              <Uavatar />
              <UserName />
            </ListItem>
           </NavLink>
            <Divider />
            <List>
              {isLogedIn?['Articles','Add'].map((text, index) => (
                <NavLink to={`/${text}`} className={classes.items} key={text}>
                  <ListItem button >
                    <ListItemIcon>{index % 2 === 0 ? <AddRoundedIcon /> : <AddRoundedIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </NavLink>
                
              )):null
              }
              <NavLink to={isLogedIn? `/`:'/SignIn'}>
                {
                  isLogedIn? 
                  <ListItem 
                  onClick={handleSignOut}
                  >
                    <ListItemIcon> <AddRoundedIcon /> </ListItemIcon>
                    <ListItemText primary='SignOut'/>
                  </ListItem>
                  :
                  <ListItem >
                    <ListItemIcon><AddRoundedIcon /></ListItemIcon>
                    <ListItemText primary='SignIn'/>
                  </ListItem>
                }
              </NavLink>
            </List>
        </Box>
      </Box>  
    )
}
export default React.memo(Sidebar); 