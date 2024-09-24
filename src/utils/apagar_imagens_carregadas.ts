import fs from "fs"




export   function apagarImagensCarregas(files:Express.Multer.File[]){
    files.forEach((file: Express.Multer.File) => {
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error(`Falha ao deletar arquivo local: ${err}`);
          } else {
            console.log(`Arquivo local deletado com sucesso: ${file.path}`);
          }
        });
      });
}