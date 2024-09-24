
import express from "express"
import fastify from "fastify"
import cors from "cors"
import routes from "./src/core/routes"


const app=express()
const appFastify=fastify({logger:true})


app.use(express.json())


app.use(cors({
    origin:["http://localhost:3000"]
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