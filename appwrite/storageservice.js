import config from "../config/config";
import { Client, ID , Storage  } from "appwrite";

export class StorageSevices{
client = new Client();
bucket;
constructor(){
    this.client
    .setEndpoint(config.appwriteURL)
    .setProject(config.appwriteProjectID);

    this.bucket = new Storage(this.client);
}

async uploadFiles(file){
    try {
      return  await this.bucket.createFile(
            config.appwriteBucketID,
            ID.unique(),
            file,
        )
    } catch (error) {
        console.log("Appwrite service :: uploadFiles :: error" , error)
        return false;
    }
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            config.appwriteBucketID,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error" , error)
        return false
    }
}
getFilepreview(fileId){
    return this.bucket.getFilePreview(
        config.appwriteBucketID,
        fileId,
    )
}
}
const storageservices = new StorageSevices();
export default storageservices;