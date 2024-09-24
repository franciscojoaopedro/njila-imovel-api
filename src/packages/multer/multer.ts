import multer from "multer";
import { v4 as uuidv4 } from "uuid"
import type { Request, Response } from "express";
import path from "path";
import fs from"fs"
// Diretórios para armazenar as imagens
const pasta_propriedades = "public/uploads/images/images_propriedades";
const pasta_usuarios = "public/uploads/images/images_usuarios";

// Função para verificar o tipo de arquivo (permitindo apenas imagens)
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Tipo de arquivo aceito
  } else {
    return "apenas imagens suportadas"
  }
};

// Função para gerar nomes únicos para as imagens
const generateFileName = (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const uniqueId = uuidv4()
  const fileExtension = path.extname(file.originalname); // Obtém a extensão original
  cb(null, `${uniqueId}${fileExtension}`);
};

const ensureDirectoryExists = (dir: string) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); 
    }
  };

// Configuração para armazenamento das imagens de propriedades
const storagePropriedades = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureDirectoryExists(pasta_propriedades)
    cb(null, pasta_propriedades);
  },
  filename: generateFileName
});

// Configuração para armazenamento das imagens de usuários
const storageUsuarios = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureDirectoryExists(pasta_usuarios)
    cb(null, pasta_usuarios);
  },
  filename: generateFileName
});

// Middleware para upload de imagens de propriedades com verificação de tipo
export const multer_propriedades = multer({
  storage: storagePropriedades,
  fileFilter: fileFilter,
  limits: { fileSize: 12 * 1024 * 1024 } // Limite de 12MB por arquivo (opcional)
});

// Middleware para upload de imagens de usuários com verificação de tipo
export const multer_usuarios = multer({
  storage: storageUsuarios,
  fileFilter: fileFilter,
  limits: { fileSize: 12 * 1024 * 1024 } // Limite de 12MB por arquivo (opcional)
});
