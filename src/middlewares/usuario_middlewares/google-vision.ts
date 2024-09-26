import vision from "@google-cloud/vision"

import type { Response,Request,NextFunction } from "express";


 

type errorVision ="LIKELY"|"POSSIBLE"|"UNKNOWN"|"UNLIKELY"|"VERY_LIKELY"|"VERY_UNLIKELY"|null |undefined

export const verifyImage = async (req:Request, res:Response, next:NextFunction) => {
    const client =  new vision.v1.ImageAnnotatorClient();

    if(req.files){
        const files=req.files as Express.Multer.File[]
        let safeSearch :errorVision=undefined
       for (const file of files ){
        const [result] = await client.safeSearchDetection(file.path);
        safeSearch = result.safeSearchAnnotation?.adult as errorVision
       }
       
        if (safeSearch ==="LIKELY") {
            return res.status(400).send('Imagem inapropriada detectada.');
        }
        if (safeSearch ==="POSSIBLE") {
            return res.status(400).send('Imagem inapropriada detectada.');
        }
        if (safeSearch ==="UNKNOWN") {
            return res.status(400).send('Imagem inapropriada detectada.');
        }
        if (safeSearch ==="UNLIKELY") {
            return res.status(400).send('Imagem inapropriada detectada.');
        }
        if (safeSearch ==="VERY_LIKELY") {
            return res.status(400).send('Imagem inapropriada detectada.');
        }
        if (safeSearch ==="VERY_UNLIKELY") {
            return res.status(400).send('Imagem inapropriada detectada.');
        }
    }
  

  
    next();
  };
  