import DatabaseContext from "./DatabaseContext";
import DatabaseService from "./Database";
import { useState } from "react";
const DatabaseProvider=({children})=>{
    const[uniqueId,setUniqueId]=useState('hi')
    const [picdoc,setPicdoc]=useState('')

    const defaultvalue={
        database:new DatabaseService(),
        uniqueId,
        picdoc,
        setPicdoc,
        setUniqueId,
    }
    return(
        <DatabaseContext.Provider value={defaultvalue}>
           {children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseProvider;