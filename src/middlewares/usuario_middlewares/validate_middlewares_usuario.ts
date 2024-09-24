import type { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';



export default function validarDados(schema:z.ZodObject<any,any>){
    return(req: Request, res: Response, next: NextFunction)=>{
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if(error instanceof ZodError){
                const errorDetails = error.errors.map(err => ({
                    path: err.path,
                    message: err.message
                }));
               return res.status(400).json({
                    success:false,
                    errorDetails
                })
            }
            else{
                return res.status(500).json({
                    success:false,
                    message: "Erro interno no servidor"
                })
            }
        }
    }

    
}