import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme)=>({
    root:{
        marginTop:'5rem',
        width:'100%',
        marginRight:'10%',
        marginLeft:'0',
        backgroundColor:theme.palette.primary.main,
        borderRadius:'0.2rem',
        padding:'2rem'
    }

}));

export default useStyle;