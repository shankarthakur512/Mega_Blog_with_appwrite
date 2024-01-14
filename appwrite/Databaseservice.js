import config from "../config/config";
import { Client, Databases, ID,Query } from "appwrite";

export class DatabaseService{
client = new Client();
databases;
constructor(){
    this.client
    .setEndpoint(config.appwriteURL)
    .setProject(config.appwriteProjectID);

    this.databases = new Databases(this.client)
}
async createPost({title,slug,content, featuredimage,status,userid}){
    try {
   return  await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
        title,
        content,
        featuredimage,
        status,
        userid,
        }
        
        )
    } catch (error) {
        throw error
    }
    
}
async updatePost(slug ,{title,content, featuredimage,status}){
      try {
      return  await this.databases.updateDocument(
         config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
        title,
        content,
        featuredimage,
        status,
        
        } 
        )
      } catch (error) {
        throw error
      }  
}
async Delete(slug){
    try {
        await this.databases.deleteDocument(
            config.appwriteDatabaseID,
            config.appwriteCollectionID,
            slug,
        )
        return true;
    } catch (error) {
        console.log("Appwrite service :: deletePost :: error" , error)
        return false;
    }
}
async getPost(slug){
    try {
        return await this.databases.getDocument(
            config.appwriteDatabaseID,
            config.appwriteCollectionID,
            slug,
        )
    } catch (error) {
        throw error;
    }
}
async getPosts(queries =[ Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            config.appwriteDatabaseID,
            config.appwriteCollectionID,
            queries,
        )
    } catch (error) {
        throw error
    }
}
}
const DatabaseServices = new DatabaseService()
export default DatabaseServices