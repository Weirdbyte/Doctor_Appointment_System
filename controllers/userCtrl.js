const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerController = async(req,res)=>{
    try {
        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser){
            return res.status(200).send({message:'User Already Exsits', success:false});
        }
   
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(200).send({message: "Registered Successfully", success:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:`Register controller ${error.message}`});
    }
};

const loginController = async (req,res)=>{
    try {
        const user = await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(200).send({message:'Invalid Email or Password' , success:false});
        }
        const matched = await bcrypt.compare(req.body.password, user.password);
        if(!matched){
            return res.status(200).send({success:false , message:'Invalid Email or Password'});
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn: '1d'}  )
        res.status(200).send({message:'Login Success', success:true, token});
    } catch (error) {  
        console.log(error);
        res.status(500).send({success:false,message:`Login controller error ${error.message}`});
    }
};

const authController = async(req,res)=>{
    try {
        const user = await userModel.findOne({_id:req.body.userId});
        if(!user){
            return res.status(200).send({message:'User not found' , success:false});
        }else{
            res.status(200).send({
                success: true,
                data: {
                    name: user.name,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:`Auth controller ${error.message}`});
    }
}
module.exports = {loginController,registerController,authController};