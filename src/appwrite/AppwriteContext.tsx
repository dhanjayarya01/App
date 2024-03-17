import AppwriteService from "./Service";
import { createContext } from "react";


export const AppwriteContext=createContext({
    //making obj of type class AppwriteService
    appwrite:new AppwriteService(), 
    isLoggedIn:true,
    currentuserinfo:"",
    setCurrentuserinfo:()=>{},
    setIsLoggedIn:()=>{}
})



export default AppwriteContext;
