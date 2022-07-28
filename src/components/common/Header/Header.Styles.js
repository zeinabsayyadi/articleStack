import { makeStyles , alpha} from '@material-ui/core/styles';

//()=>({}) : in ({}) yani return kon {} ro . dige return nminevisim  
const useStyle = makeStyles((theme)=>({
    root:{
        margin:0,
        padding:0,
        width:'100%',
        position:'fixed',
        backgroundColor:'white',
        zIndex: theme.zIndex.drawer + 1
    },
    Appbar:{
        backgroundColor:theme.palette.white,
        margin:0,
        padding:0,
        width:'100%'   
    },
    grow:{
        flexGrow:1
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(1,1),
    height: '100%',
    position: 'reletive',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:theme.palette.secondary.main
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}));

export default useStyle;