const express = require("express");
const {loginController,registerController} = require("../controllers/userCtrl");

const router = express.Router();
 

//routes----
//LOGIN | POST
router.post("/login" , loginController);

//register | POST

router.post("/register" , registerController);