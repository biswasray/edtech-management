require("dotenv").config();
const app=require('express')();
const http=require('http');
const server=http.createServer(app);
const PORT=process.env.PORT||5000;

app.get('*',(req,res)=>res.send("<h3>EdTech-Management</h3><br/><br/>Bhai kya kar raha hai tu?"));
server.listen(PORT,()=>console.log(`Server running on ${PORT} port`));