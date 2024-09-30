import cloudinary from "../packages/clouds/cloudinary";
import { apagarImagensCarregaOne, apagarImagensCarregas } from "./apagar_imagens_carregadas";







interface propsUploadImagem{
    pasta:string,
    files:Express.Multer.File[]
}


interface propsUploadOneImagem{
    pasta:string,
    file:Express.Multer.File
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



export async function useUploadeOneFile({file,pasta}:propsUploadOneImagem){
    let imageUrl: string = ""

    
    const uploadResponse = await cloudinary.uploader.upload(file.path,{
        folder:pasta,

    });
    imageUrl=uploadResponse.url
    apagarImagensCarregaOne(file)

    return{
        imageUrl
    }
}