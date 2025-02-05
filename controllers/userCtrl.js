const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');

const registerController = async(req,res)=>{
    try {
        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser){
            return res.status(200).send({message:'User Already Exsits', success:failed})
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

const loginController = ()=>{}


module.export = {loginController,registerController};