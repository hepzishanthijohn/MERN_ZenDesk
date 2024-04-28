const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const memberRoutes = require('./routes/memberRoutes');

const StudentRoutes = require('./routes/studentRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const tasksRoutes = require('./routes/tasksRoutes');
const taskSubmissionRoutes = require('./routes/taskSubmissionRoutes');
const queriesRoutes = require('./routes/queriesRoutes');
const querySubmissionRoutes = require('./routes/querySubmissionRoutes')

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.use('/auth',authRoutes)
app.use('/users',userRoutes);
app.use('/members',memberRoutes);

app.use('/student',StudentRoutes);
app.use('/mentor',mentorRoutes);
app.use('/course',courseRoutes);
app.use('/tasks',tasksRoutes);
app.use('/taskSubmission',taskSubmissionRoutes);
app.use('/query',queriesRoutes)
app.use('/querySubmission',querySubmissionRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, ()=>{
    console.log(`server running on port : http://localhost:${PORT}/members`)
})