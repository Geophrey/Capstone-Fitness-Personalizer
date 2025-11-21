import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    trainingType: {
        type: [String],
        required: true,

        // custom data validator to make sure the training type array only stores a maximum of 3 values
        validate: {
            validator: function (v) {
                return !v || v.length <= 3;
            },
        },
        message: (props) =>
            `trainingType has ${props.value.length} elements attempting to be passed but the maximum is 3`,
    },
    tutorial: {
        type: String,
        required: true,
    },
    measurementUnits: {
        type: [String],
        validate: {
            validator: (v) => Array.isArray(v) && v.length > 0,
            message:
                "measurementUnits must be an array and must contain at least one item",
        },

        required: true,
    },
    intensity: {
        type: Number,
        required: true,
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
