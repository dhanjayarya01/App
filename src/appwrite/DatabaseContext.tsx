import DatabaseService from "./Database";
import { createContext } from "react";

const DatabaseContext=createContext({
    uniqueId:'',
    setUniqueId:()=>{},
    database:new DatabaseService()
})

export default DatabaseContext