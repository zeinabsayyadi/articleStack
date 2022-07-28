import React, { useContext } from "react";
import {useFormik} from 'formik';
import useStyle from "../crud.style";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Box,Avatar,Typography,TextField,Button,FormControlLabel,Checkbox} from '@material-ui/core';
import { contextsStore } from "../../../Contexts";
const EditeArticle = ()=>{
    const classes = useStyle();
    const {currentArticle,setCurrentArticle} = useContext(contextsStore)
    const schema = yup.object().shape({
        subject: yup.string().required('subject is required'),
        summery:yup.string().required(),
        context:yup.string().required(),
      //   picture:yup.mixed().required('A file is required')
      });
    const handleUpdateForm =  async(e)=>{
        console.log(`e : `,e);
        const newArticle =  {
            subject: formik.values.subject ,
            summery: formik.values.summery,
            context : formik.values.context, 
            picture: formik.values.picture
         };
        try {
            await axios.put(`https://62de61cc9c47ff309e71cc65.mockapi.io/api/articlestack/article/${currentArticle.id}`, 
            newArticle
            ).then((res)=> {
                console.log({res});
                
            })
         } catch (error) {
             console.log({error});
        }
    
    //      /*navigate("/signleArticles/:SingleArticlePage")*/
    };
    const formik = useFormik({
        initialValues:{
            subject: currentArticle.subject,
            summery:currentArticle.summery,
            context: currentArticle.context,
            picture:'',
      },
      onSubmit: handleUpdateForm,
      validationSchema:schema
     },
     );
    return (
        <Box
        className={classes.root}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          R
        </Avatar>
        <Typography component="h1" variant="h5">
          Edite Article
        </Typography>
        <form onSubmit={formik.handleSubmit }>

        <Box sx={{ mt: 1 }}> 
          <TextField
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Subject"
            name="subject"
            autoComplete="input"
            autoFocus
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.subject}
            error={formik.errors.subject?true:false}
            />  
          <TextField
            margin="normal"
            required
            fullWidth
            id="summery"
            label="Summery"
            name="summery"
            autoComplete="input"
            autoFocus
            value={formik.values.summery}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.summery}
            error={formik.errors.summery?true:false}
            />
          <TextField
            margin="normal"
            required
            fullWidth
            id="context"
            label="Article contect"
            name="context" 
            autoComplete="input"
            autoFocus
            multiline
            minRows={5}
            value={formik.values.context}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.context}
            error={formik.errors.context?true:false}
            />
         <Box>
         <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                name="picture"
                type="file"
                value={formik.values.picture}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
        />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                Upload
                </Button>
            </label>
         </Box>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Update
          </Button>
        </Box>
              </form>
      </Box> 
    )
};

export default EditeArticle;