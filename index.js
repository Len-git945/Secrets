//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const _dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

function secretProject(req,res,next){
    console.log (req.body);
    next();
}
app.use (secretProject);

app.post("/check",(req,res)=>{
    const pass = req.body.password;
    if (pass==="ILoveProgramming"){
        res.sendFile(_dirname+"/public/secret.html");
    } else {
        res.sendFile(_dirname+"/public/index.html");
    }
});


app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html");
});

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});