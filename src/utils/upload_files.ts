import cloudinary from "../packages/clouds/cloudinary";
import { apagarImagensCarregas } from "./apagar_imagens_carregadas";







interface propsUploadImagem{
    pasta:string,
    files:Express.Multer.File[]
}


export async function useUploadImages({files,pasta}:propsUploadImagem){
    const uploadedImages: string[] = []

    console.log(files)
    for (const file of files) {
        const uploadResponse = await cloudinary.uploader.upload(file.path,{
            folder:"imagens_propriedades",

        });
        uploadedImages.push(uploadResponse.url); 
    }
    apagarImagensCarregas(files)

    return{
        uploadedImages
    }
}