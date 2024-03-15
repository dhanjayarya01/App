import DatabaseService from "./Database";
import { createContext } from "react";

const DatabaseContext=createContext({
    uniqueId:'',
    picdoc:'',
    setUniqueId:()=>{},
    setPicdoc:()=>{},
    database:new DatabaseService()
})

export default DatabaseContext