/*------------*\
|  API Routes  |
\*------------*/

// modules -----
const router = require("express").Router();
const Exercise = require("../models/exerciseModel");
const Workout = require("../models/workoutModel");

// api.js ----
// get last workout
// GET `/api/workouts`
router.get(`/api/workouts`, function (request, response){
    Workout.find({}).then(function(result){
        response.json(result);
    });
});

// add exercise
// PUT `/api/workouts/id`
router.put(`/api/workouts/:id`, function (request, response){
    // create exercise from request data
    let newExercise = await Exercise.create({
        type: request.body.type,
        name: request.body.name,
        distance: request.body.distance,
        duration: request.body.duration,
        weight: request.body.weight,
        reps: request.body.reps,
        sets: request.body.sets
    });

    // get matching workout
    let workoutId = request.params.id;

    // update workout by appending new exercise
    let updatedWorkout = await Workout.findOneAndUpdate({"_id": workoutId}, {$push: {exercises: newExercise}}, {new: true});

    // return updated exercise
    response.json(updatedWorkout);
});

// create workout
// POST `/api/workouts`
router.post(`/api/workouts`, function (request, response){
    Workout.create();
});

// get workouts in range
// GET `/api/workouts/range`
router.get(`/api/workouts/range`, function (request, response){

});

// stats.js ----
// fetch stats
// `/api/workouts/range`

// make routes available as module
module.exports = router;