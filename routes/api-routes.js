/*------------*\
|  API Routes  |
\*------------*/

// modules -----
const router = require("express").Router();
const Exercise = require("../models/exerciseModel");
const Workout = require("../models/workoutModel");
const path = require("path");

// api.js ----
// get last workout
// GET `/api/workouts`
router.get(`/api/workouts`, function (request, response){
    Workout.find({}).sort({ createdAt: -1}).limit(1).then(function(result){
        response.json(result);
    });
});

// add exercise
// PUT `/api/workouts/id`
router.put(`/api/workouts/:id`, function (request, response){
    // create exercise from request data
    let newExercise = Exercise.create({
        type: request.body.type,
        name: request.body.name,
        distance: request.body.distance,
        duration: request.body.duration,
        weight: request.body.weight,
        reps: request.body.reps,
        sets: request.body.sets
    }).next(
        // add to workout with ID from parameter
        Workout.findOneAndUpdate({"_id": request.params.id}, {$push: {exercises: newExercise}}, {new: true}));

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
    Workout.find({}).then(function (result){
        response.json(result);
    })
});

// home page
router.get("/", function (request, response){
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

// make routes available as module
module.exports = router;