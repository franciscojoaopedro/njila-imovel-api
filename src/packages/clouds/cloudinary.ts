
import { v2 as cloudinary } from 'cloudinary';


 cloudinary.config({
    cloud_name: 'dxwdnr34b', 
    api_key: '149317449223257', 
    api_secret: process.env.CLOUD_API_SECRET
 })



 export default cloudinary