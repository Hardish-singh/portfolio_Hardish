import express from 'express';
import mongoose from 'mongoose';
import Feedback from './models/feedback.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
// const PORT =  3000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use (express.static('public'));
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected!'))
.catch(err => console.error('MongoDB connection error:', err));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/feedBackForm',async(req,res)=>
{
    const {name ,email ,message} = req.body;
    const newfeedBack=new Feedback({name , email , message});
    try {
        await newfeedBack.save();
        res.status(200).json({message:"form submitted"});
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
})
// app.listen(PORT,()=>
// {
//     console.log("server is ready to respond");
// })