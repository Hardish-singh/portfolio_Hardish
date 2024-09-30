import express from 'express';
import mongoose from 'mongoose';
import Feedback from './models/feedback.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app=express();
const port =7000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use (express.static('public'));
mongoose.connect('mongodb://localhost:27017/portfolioFeedBack')
app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

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
app.listen(port,()=>
{
    console.log("server is ready to respond");
})