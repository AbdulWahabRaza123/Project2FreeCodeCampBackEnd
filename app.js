const express=require('express');
const path=require('path');
const app=express();
const cors=require('cors');

app.use(cors({optionsSuccessStatus: 200})); 
const port=process.env.PORT||8000;
const staticPath=path.join(__dirname,'./public');
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
res.send('index.html');
})
app.get('/api/whoami',(req,res)=>{
    res.json({ipaddress:req.ip,
        language:req.headers["accept-language"],
    software:req.header('User-Agent')});
})
app.listen(port,()=>{
    console.log("Listening to port ",port);
})
