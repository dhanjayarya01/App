import DatabaseContext from "./DatabaseContext";
import DatabaseService from "./Database";
import { useState } from "react";
const DatabaseProvider=({children})=>{
    const[uniqueId,setUniqueId]=useState('hi')
    const defaultvalue={
        database:new DatabaseService(),
        uniqueId,
        setUniqueId,
    }
    return(
        <DatabaseContext.Provider value={defaultvalue}>
           {children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseProvider;