import mongoose from "mongoose";

const trainingTypeSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        lowercase: true
    }
})

const Training = mongoose.model("training", trainingTypeSchema);

export default Training;