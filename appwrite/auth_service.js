import config from "../config/config";
import { Client, Account, ID } from "appwrite";



export class Authentication {
 client = new Client();
 account;
 constructor(){
    this.client
    .setEndpoint(config.appwriteURL) 
    .setProject(config.appwriteProjectID); 
    this.account = new Account(this.client);
 }
 async createAccount ({ email , name ,password}){
    try{
      
  const userAccount = await this.account.create(ID.unique() ,email,password,name);
  if (userAccount) {
    //metod for login
    return this.login({email , password})
  } else {
    return userAccount;
  }
    } catch (error){
       throw error;
    }
 }
 async login ({email , password}){
    try{
   return await this.account.createEmailSession(email, password);
 
    }catch(error){
       throw error;
    }
 }
 async getaccount(){
    try {
        return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getaccount :: error" , error)
     }
    return null;
 }
 async logout (){
    try {
        await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error" , error)
    }
 }

}
const authentication = new Authentication();
export default authentication;