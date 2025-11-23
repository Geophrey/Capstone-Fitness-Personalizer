import mongoose from "mongoose";

const unitsOfMeasurementSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        lowercase: true
    }
})

const Units = mongoose.model("Units", unitsOfMeasurementSchema);

export default Units;