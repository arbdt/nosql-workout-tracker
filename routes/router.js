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
    Workout.find({}).then(function(result){
        response.json(result);
    });
});

// add exercise
// PUT `/api/workouts/id`
router.put(`/api/workouts/:id`, function (request, response){

});

// create workout
// POST `/api/workouts`
router.post(`/api/workouts`, function (request, response){

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