import Feedback from '../models/feedback.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        const newFeedback = new Feedback({ name, email, message });

        try {
            await newFeedback.save();
            return res.status(200).json({ message: "Form submitted" });
        } catch (error) {
            return res.status(400).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};
