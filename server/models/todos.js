import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, { timestamps: true });
const Todo = mongoose.model('Todo', todoSchema)
export default Todo;