 import React from "react"
 import AppwriteService from "./Service"
 import AppwriteContext from "./AppwriteContext"
import { useState } from "react"
 
 const AppwriteProvider=({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const defaultValue={
        appwrite:new AppwriteService(), 
        isLoggedIn,
        setIsLoggedIn
         
    }
    return(
        <AppwriteContext.Provider value={defaultValue}>
        {children}
        </AppwriteContext.Provider>
    )
}

export default AppwriteProvider