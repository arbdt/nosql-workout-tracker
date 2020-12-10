// import Mongoose
const mongoose = require("mongoose");
const Exercises = require("./exerciseModel");
const ObjectId = mongoose.SchemaTypes.ObjectId;

// set up schema
const Schema = mongoose.Schema;

// schema definition -----
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: [{
            type: ObjectId, ref: Exercises
        }]
    }
});

// create model
const Workout = mongoose.model("Workout", WorkoutSchema);

// export model
module.exports = Workout;