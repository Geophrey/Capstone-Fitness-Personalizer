import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
        lowercase: true,
    },
    trainingType: {
        type: [String],
        required: false,
        default: ["test"], //delete this when testing works

        //custom data validator to make sure the training type array only stores a maximum of 3 values
        // validate: {
        //     validator: function (v) {
        //         return !v || v.length <= 3;
        //     },
        // },
        // message: (props) =>
        //     `trainingType has ${props.value.length} elements attempting to be passed but the maximum is 3`,
    },
    tutorial: {
        type: String,
        default: null, //delete this when testing works
        required: false,
    },
    measurementUnits: {
        type: [String],
        default: ["test"], //delete this when testing works
        // validate: {
        //     validator: (v) => Array.isArray(v) && v.length > 0,
        //     message:
        //         "measurementUnits must be an array and must contain at least one item",
        // },

        required: false,
    },
    intensity: {
        type: Number,
        default: null, //delete this when testing works
        required: false,
    },
    notes: {
        type: String,
        default: null,
        required: false,
    },
    //could change to an array of objects to hold multiple images and a short description of what it is if time permits
    imageURL: {
        type: String,
        default: null,
        required: false,
    },
});

const Exercise = mongoose.model("exercise", exerciseSchema);

export default Exercise;
