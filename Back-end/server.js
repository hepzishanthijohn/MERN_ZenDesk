const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const memberRoutes = require('./routes/memberRoutes');



require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.use('/auth',authRoutes)
app.use('/users',userRoutes);
app.use('/members',memberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})