const JWT = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try {
        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                return res.status(200).send({message:'Auth failed', success:false});
            }else{
                req.body.userId = decoded.id;
                next();
            }
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({success:false,message:`Auth Middleware ${error.message}`});
    }
}