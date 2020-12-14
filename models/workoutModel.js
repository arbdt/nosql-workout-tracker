/*---------------*\
|  Workout Model  |
\*---------------*/

// import Mongoose
const mongoose = require("mongoose");

// set up schema
const Schema = mongoose.Schema;

// schema definition -----
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
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
    }
});

// create model
const Workout = mongoose.model("Workout", WorkoutSchema);

// export model
module.exports = Workout;