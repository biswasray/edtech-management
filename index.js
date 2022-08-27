require("dotenv").config();
require("./config/database").connect();
const express=require('express');
const cookieParser=require('cookie-parser');
const { body, validationResult } = require('express-validator');
const app=express();
const cors = require("cors");
const http=require('http');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const server=http.createServer(app);
const PORT=process.env.PORT||5000;
const User=require('./model/user');
const Role=require('./model/role');
const School=require('./model/school');
const Student=require('./model/student');
var Auth=require('./middleware/auth');
var auth=new Auth();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.post('/user/signup',body('email').isEmail().normalizeEmail(),body('password').isLength({ min: 8 }),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {first_name,last_name,email,mobile,password,roleId}=req.body;
        const oldUser = await User.findOne({ email });
        if(oldUser)
            return res.status(409).json({errors:"User Already Exist. Please Login"});
        let encryptedUserPassword = await bcrypt.hash(password, 10);
        let user = await User.create({
            first_name,
            last_name,
            email,
            mobile,
            password: encryptedUserPassword,
            roleId,
            created:new Date().toISOString(),
            updated:null
        });
        let give={
            status:true,
            content:{
                data:user
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});
app.post('/user/signin',body('email').isEmail(),body('password').isLength({ min: 8 }),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {email,password}=req.body;
        let user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            let temp={
                _id:user._id,
                first_name:user.first_name,
                last_name:user.last_name,
                email:user.email,
                mobile:user.mobile,
                roleId:user.roleId,
                created:user.created,
                updated:user.updated,
            };
            const token = jwt.sign(
              temp,
              process.env.TOKEN_KEY,
              {
                expiresIn: "5h",
              }
            );
            let give={
                status:true,
                content:{
                    data:temp,
                    token
                }
              };
            res.cookie("token",token);
            return res.status(200).json(give);
          }
          return res.status(400).json({errors:"Invalid Credentials"});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});
app.get('/user/:id',auth.userGet,async (req,res)=>{
    try {
        let users=await User.findOne({_id:req.params.id},{password:0});
        let give={
            status:true,
            content:{
                data:users
            }
          };
        return res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});
app.get('/user',auth.userGet,async (req,res)=>{
    try {
        let users=await User.find({},{password:0});
        let give={
            status:false,
            content:{
                data:users
            }
          };
        return res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});

app.post('/role',async (req,res)=>{
    try {
        const {name,scopes}=req.body;
        let role=await Role.create({
            name,
            scopes,
            created:new Date().toISOString(),
            updated:null
        });
        let give={
            status:true,
            content:{
                data:role
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});
app.get('/role',auth.roleGet,async (req,res)=>{
    try {
        let roles=await Role.find();
        let give={
            status:true,
            content:{
                data:roles
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});

app.post('/school',auth.schoolCreate,async (req,res)=>{
    try {
        const {name,city,state,country}=req.body;
        let school=await School.create({
            name,
            city,
            state,
            country,
            created:new Date().toISOString(),
            updated:null
        });
        let give={
            status:true,
            content:{
                data:school
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});
app.get('/school',auth.schoolGet,async (req,res)=>{
    try {
        let schools=await School.find();
        let give={
            status:true,
            content:{
                data:schools
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});

app.post('/student',auth.studentCreate,async (req,res)=>{
    try {
        const {name,userId,schoolId}=req.body;
        let student=await Student.create({
            name,
            userId,
            schoolId,
            created:new Date().toISOString(),
            updated:null
        });
        let give={
            status:true,
            content:{
                data:student
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});
app.get('/student',auth.studentGet,async (req,res)=>{
    try {
        let students=await Student.find();
        let give={
            status:true,
            content:{
                data:students
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});

app.get('/school/students',auth.schoolStudents,async (req,res)=> {
    try {
        let schools=await School.aggregate([{
            $lookup: {
                from:"students",
                localField:"_id",
                foreignField:"schoolId",
                as:"students"
            }
        }]);
        let give={
            status:true,
            content:{
                data:schools
            }
          };
        res.status(200).json(give);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ errors: "Something is wrong I can feel it " });
    }
});


app.get('*',(req,res)=>{
    res.send(
        `<center><h3>EdTech-Management</h3></center><br/><br/>Bhai kya kar raha hai tu?`
    );
});
server.listen(PORT,()=>console.log(`Server running on ${PORT} port`));