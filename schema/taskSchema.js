import mongoose from "mongoose";

const TaskSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    timeToComplete: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        default: 'Entry'
    },
    difficulty: {
        type: String,
        default: 'Easy'
    },
    priority: {
        type: String,
        default: 'Low'
    }
})

export default mongoose.model("task", TaskSchema)