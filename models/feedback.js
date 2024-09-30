import mongoose from 'mongoose';
const data=new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    message:{type:String , required:true}
});

const Feedback= mongoose.model('Feedback',data);
export default Feedback;