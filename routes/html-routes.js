/*-------------*\
|  HTML Routes  |
\*-------------*/

// modules -----
const router = require("express").Router();
const path = require("path");

// home page
router.get("/", function (request, response){
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise page
router.get("/exercise", function (request, response){
    response.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats page
router.get("/stats", function (request, response){
    response.sendFile(path.join(__dirname, "../public/stats.html"));
});

// make routes available as module
module.exports = router;