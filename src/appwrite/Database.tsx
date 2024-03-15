import { Client,ID,Databases,Storage,Query } from "appwrite";
import Config from "react-native-config";
import { useId } from "react";
const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID= Config.APPWRITE_PROJECT_ID!;
const APPWRITE_COLLECTION_ID=Config.APPWRITE_COLLECTION_ID!;
const APPWRITE_BUCKET_ID=Config.APPWRITE_BUCKET_ID!;
const APPWRITE_DATABASE_ID=Config.APPWRITE_DATABASE_ID!;

class DatabaseService{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async createPost({title,uniqueId,content,userId,Requirement,featureimage,TechnologyUsed,github}){
        try{
             console.log("enter in try create post")
            return await this.databases.createDocument(
                APPWRITE_DATABASE_ID,
                APPWRITE_COLLECTION_ID,
                uniqueId,
                {
                    title,
                    userId,
                    content,
                    TechnologyUsed,
                    featureimage,
                    Requirement,
                    github
                }
            )
        }
         catch(error){
         console.log("createpostDatabase service: ",error)
    }
}
    async updatePost({uniqueId,title,content,featuredImage,status,TechnologyUsed,Requirement,step,github}){
        try{
            return await this.databases.updateDocument(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID,uniqueId,{
                title,
                content,
                featuredImage,
                status,
            })
            
        } catch (error){
            console.log("updatepost Database service :",error)
        }
        
    }
    
    async deletePost(uniqueId){
        try{
            await this.databases.deleteDocument(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID,uniqueId)
            return true
        }catch(error){
            console.log("delete post serv:",error)
            return false
        }
    }

    async getPost(uniqueId){
        try{
            return await this.databases.getDocument(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID,uniqueId)
        } catch(error){
            console.log("Appwrite service :: getpost",error)
        }
    }
   
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(APPWRITE_DATABASE_ID,APPWRITE_DATABASE_ID,queries)
        } catch(error){
            console.log("Appwrite service :: getposts",error)
        }
    }

   //file upload 

   async uploadFile(file){
    try{
      return await this.bucket.createFile(APPWRITE_BUCKET_ID,ID.unique(),file)
    }
    catch(error){
    console.log("Appwrite service :: uploadFile",error)
 }
}
async deleteFile(fileId){
   try{
     await this.bucket.deleteFile(APPWRITE_BUCKET_ID,fileId)
   } catch(error){
      console.log("delete file service :",error)
   }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(
        APPWRITE_BUCKET_ID,
        fileId
    )
}
}

export default DatabaseService