 import React from "react"
 import AppwriteService from "./Service"
 import AppwriteContext from "./AppwriteContext"
import { useState } from "react"
 
 const AppwriteProvider=({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[currentuserinfo,setCurrentuserinfo]=useState({})
    const defaultValue={
        appwrite:new AppwriteService(), 
        isLoggedIn,
        currentuserinfo,
        setCurrentuserinfo,
        setIsLoggedIn
         
    }
    return(
        <AppwriteContext.Provider value={defaultValue}>
        {children}
        </AppwriteContext.Provider>
    )
}

export default AppwriteProvider