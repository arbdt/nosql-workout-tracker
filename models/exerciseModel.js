/*----------------*\
|  Exercise Model  |
\*----------------*/

// import Mongoose
const mongoose = require("mongoose");

// set up schema
const Schema = mongoose.Schema;

// schema definition -----
const ExerciseSchema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String
    },
    distance: {
        type: Number,
        min: 0
    },
    duration: {
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    reps: {
        type: Number,
        min: 0
    },
    sets: {
        type: Number,
        min: 0
    }
});

// create model
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// export model
module.exports = Exercise;