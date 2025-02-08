const express = require('express');
const colors = require('colors');
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/api/v1/user', require('./routes/userRoutes'));

// app.get("/",(req,res)=>{
//     res.send("hello");
// })


//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, ()=>{
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgBlue.white
    );
});