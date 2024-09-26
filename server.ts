
import express from "express"

import cors from "cors"
import routes from "./src/core/routes"


const app=express()


app.use(express.json())


app.use(cors({
    origin:["http://localhost:3000","https://njilaimovel.vercel.app","https://36ee-2c0f-f888-a980-2848-704f-b40b-a495-8fe3.ngrok-free.app"]
}))


app.use("/api",routes)

app.get("/",(req,res)=>{
    res.json({
        api:"API IMOBILIARIA",
        versao:"1.0.0",
        
    })
})
const port=process.env.SERVER_PORT
app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})