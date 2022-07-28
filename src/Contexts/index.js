import { useEffect } from 'react';
import {createContext, useState} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Cookies from "js-cookie";
export const contextsStore = createContext({
    articlesList:[],
    setArticlesList :()=>{},
    currentArticle :{},
    setCurrentArticle: ()=>{},
    inArticlePage: null,
    setInArticlePage:()=>{},
    isDelete:null,
    setIsDelete:()=>{},
    isLogedIn: false,
    setIsLogedIn:()=>{},
    cookie:'',
    setCookie:()=>{},
    removeCookie:()=>{},
    userStatus:'',
    setUserStatus:()=>{},
    currentUser:{},
    setCurrentUser:()=>{},
    loading: false,
    setIsLoading:()=>{}
});

const ContextsProvider =({children})=>{
    const [articlesList,setArticlesList] = useState([]);
    const [isDelete,setIsDelete] = useState(false);
    const [cookie,setCookie,removeCookie] = useCookies();
    const [isLogedIn,setIsLogedIn]=useState(cookie.token);
    const[userStatus,setUserStatus] = useState('usual');
    const [currentUser,setCurrentUser] = useState(
        Cookies.get('token')!== undefined? JSON.parse(Cookies.get('token')) : {}
    );

    useEffect(() => {
        axios.get(`https://62de61cc9c47ff309e71cc65.mockapi.io/api/articlestack/article`)
            .then((response) => {
                setArticlesList(response.data)
            })
    }, [isDelete]);
    const [currentArticle,setCurrentArticle] = useState(articlesList[0]);
    const [inArticlePage,setInArticlePage] = useState(false);
    const [loading,setIsLoading] = useState(false)
    return(
        <contextsStore.Provider
        value={{
            articlesList,
            setArticlesList,
            currentArticle,
            setCurrentArticle,
            inArticlePage,
            setInArticlePage,
            isDelete,
            setIsDelete,
            cookie,
            setCookie,
            removeCookie,
            isLogedIn,
            setIsLogedIn,
            userStatus,
            setUserStatus,
            currentUser,
            setCurrentUser,
            loading,
            setIsLoading
        }}
        >
        {children} 
        </contextsStore.Provider>
    )
};
export default ContextsProvider;