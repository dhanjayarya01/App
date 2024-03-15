import { ID, Account, Client } from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'
const appwriteClient = new Client()

const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID= Config.APPWRITE_PROJECT_ID!;

class AppwriteService {
    account;

    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)
    }


    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
                //TODO: 
                return this.login({email, password})
            } else {
                return userAccount
            }
        }catch(error){
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: createAccount() :: ",error);
        }
             
            
        }
    

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: loginAccount() :: " + error);
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            return null;
            console.log("Appwrite service :: getCurrentAccount() :: " + error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service :: logout() :: " + error);
        }
    }
}

export default AppwriteService