/*------------*\
|  API Routes  |
\*------------*/

// modules -----
const router = require("express").Router();
const Workout = require("../models/workoutModel");

// api.js ----
// get last workout
// GET `/api/workouts`
router.get(`/api/workouts`, function (request, response){
    // find workouts
    Workout.find({}).sort({ day: -1}).limit(1).then(function(result){
        // send workouts
        response.json(result);
    });
});

// add exercise
// PUT `/api/workouts/id`
router.put(`/api/workouts/:id`, function (request, response){
    // create exercise from request data
    let newExercise ={
        type: request.body.type,
        name: request.body.name,
        distance: request.body.distance,
        duration: request.body.duration,
        weight: request.body.weight,
        reps: request.body.reps,
        sets: request.body.sets
    };

    // add to workout with ID from parameter
    Workout.findByIdAndUpdate(request.params.id, {$push: {exercises: newExercise}}, {new: true}, function (error, result){
        if (error){
            console.error(error);
        } else {
            // return updated workout item
            response.json(result);
        }
    });
});

// create new workout
// POST `/api/workouts`
router.post(`/api/workouts`, function (request, response){
    // create exercise from request data
    let newExercise ={
        type: request.body.type,
        name: request.body.name,
        distance: request.body.distance,
        duration: request.body.duration,
        weight: request.body.weight,
        reps: request.body.reps,
        sets: request.body.sets
    };
    // create new workout using exercise data
    Workout.create({exercises: newExercise}).then( function(result){
        // return workout
        response.json(result);
    });
});

// get workouts in range
// GET `/api/workouts/range`
router.get(`/api/workouts/range`, function (request, response){
    // find all
    Workout.find({}).then(function (result){
        // return query output
        response.json(result);
    })
});

// make routes available as module
module.exports = router;