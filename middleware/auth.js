const jwt=require("jsonwebtoken");
const Role=require('../model/role');
const key=process.env.TOKEN_KEY;
class Auth {
    async userGet(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="user-get")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async userCreate(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="user-create")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async studentGet(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="student-get")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async studentCreate(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="student-create")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async schoolGet(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="school-get")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async schoolCreate(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="school-create")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async roleGet(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="role-get")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
    async schoolStudents(req,res,next) {
        const token=req.cookies.token||req.query.token||req.headers["x-access-token"];
        if(!token)
            return res.status(401).json({errors:"A token is required for authentication"});
        try {
            const decoded = jwt.verify(token,key);
            req.user = decoded;
            let role=await Role.findOne({_id:decoded?.roleId});
            if(!role||!(role.scopes.find(s=>s=="school-students")))
                return res.status(403).json({errors:"Forbidden access , you are not unauthorized"});
        }
        catch (err) {
            return res.status(401).json({errors:"Invalid Token"});
        }
        next();
    }
}
module.exports=Auth;