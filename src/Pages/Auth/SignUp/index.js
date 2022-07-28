import { Avatar, Box, Button, ButtonBase, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import React, { useContext, useEffect} from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {USERS } from "../../../api"; 
import {useFormik} from 'formik'
import useStyle from "../SignIn.style";
import axios from 'axios';
import * as yup from 'yup';   
import { NavLink, useNavigate } from "react-router-dom";
import { contextsStore } from "../../../Contexts";
//for fetch data use useEffect babe
const SignUp =()=>{
    const classes = useStyle();
    const {cookie,setCookie,removeCookie,isLogedIn,setIsLogedIn,userStatus,setUserStatus,currentUser,setCurrentUser} = useContext(contextsStore)
    const navigate = useNavigate();
    useEffect(()=>{
      isLogedIn && navigate("/");
    },[])
    let schema = yup.object().shape({
      fullname:yup.string('enter fullname in a valid form pleas').required('fullname is required!'),
      username: yup.string().required('username is required'),
      email:yup.string().email().required('email is required'),
      password:yup.string().required('password is required').min(6,'its charachter must be more than 6').max(8),
      confirmpassword:yup.string().required('confirm password is required').oneOf([yup.ref('password'), null])
    })
    const handleSubmitForm= async (values)=>{
        try{
          const res = await axios.post(USERS,{
            name : values.fullname,
            username: values.username,
            email:  values.email,
            password:values.password,
        }).then((res)=>{
          const {data} = res;
          setCurrentUser(data);
          setCookie('token',data,{
          maxAge: 60*60*24*7
          });
          navigate("/profile");
          setIsLogedIn(true);
          setUserStatus('author');
          
        })
        }catch(ex){
          console.log(ex);
          setIsLogedIn(false)
          setUserStatus('usual')
        }
    };
     const formik = useFormik({
        initialValues:{
            fullname : '',
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
      },
      onSubmit: handleSubmitForm,
      validationSchema:schema
     },
    
     );

    return (
        <Box
        className={classes.root}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component='form' onSubmit={formik.handleSubmit }  sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullname"
            autoComplete="input"
            autoFocus
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.fullname}
            error={formik.errors.fullname?true:false}
          />  
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoComplete="input"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.username}
            error={formik.errors.username?true:false}
          />
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            id="confirmassword"
            autoComplete="current-password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.confirmpassword}
            error={formik.errors.confirmpassword?true:false}
          
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
           <ButtonBase>
            <NavLink to='/signIn'>alerady have an account</NavLink>
          </ButtonBase>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box> 
    )
};

export default SignUp;