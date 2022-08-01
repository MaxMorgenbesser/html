import express from "express";
import cors from "cors"

const app = express()
const port = 3001
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>
{console.log("Now listening on ", port)})
