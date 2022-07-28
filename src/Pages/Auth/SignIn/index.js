import { Avatar, Box, Button, ButtonBase, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { LOGIN } from "../../../api"; 
import {useFormik} from 'formik'
import useStyle from "../SignIn.style";
import axios from 'axios';
import * as yup from 'yup';   
import { NavLink, useNavigate } from "react-router-dom";
import { contextsStore } from "../../../Contexts";
import Loader from "../../../components/common/Loader";
//for fetch data use useEffect babe
const SignIn =()=>{
    const classes = useStyle();
    const {setCookie,isLogedIn,setIsLogedIn,setUserStatus,setCurrentUser,setIsLoading} = useContext(contextsStore)
    const navigate = useNavigate();
    useEffect(()=>{
      isLogedIn && navigate("/");
    },[])
    let schema = yup.object().shape({
      email:yup.string().email().required('email is required'),
      password:yup.string().required('password is required').min(6,'its charachter must be more than 6').max(8),
    })
    const handleSubmitForm= async (values)=>{
        setIsLoading(true)
        try{
          const res = await axios.get(`https://62de61cc9c47ff309e71cc65.mockapi.io/api/articlestack/users`)
          .then((res) => {
            setIsLoading(false)
            const userList = (res.data)
            const filterd = userList.filter(item=> item.email == values.email && item.password ==values.password);
            setCurrentUser(filterd[0]|| {});
            setCookie('token',filterd[0],{
              maxAge: 60*60*24*7
              });
        })
         navigate("/");
         setIsLogedIn(true);
         setUserStatus('author');
        }catch(ex){
          console.log(ex);
          setIsLoading(false)
          setIsLogedIn(false)
          setUserStatus('usual')
        }
    };
     const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
      },
      onSubmit: handleSubmitForm,
      validationSchema:schema
     },
    
     );

    return (
        <Box
        className={classes.root}
      >
        <Loader/>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component='form' onSubmit={formik.handleSubmit }  sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.email}
            error={formik.errors.email?true:false}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password" 
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.password}
            error={formik.errors.password?true:false}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ButtonBase>
            <NavLink to='/signUp'>dont have an account?</NavLink>
          </ButtonBase>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SIGN IN
          </Button>
        </Box>
      </Box> 
    )
};

export default SignIn;