import { makeStyles , alpha} from '@material-ui/core/styles';

//()=>({}) : in ({}) yani return kon {} ro . dige return nminevisim  
const useStyle = makeStyles((theme)=>({
    root:{
        marginTop:'5rem',
        width:'100%',
        marginRight:'10%',
        marginLeft:'0',
        backgroundColor:theme.palette.primary.main,
        borderRadius:'0.2rem',
        padding:'2rem'
    },
    submitButton :{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    }

}));

export default useStyle;