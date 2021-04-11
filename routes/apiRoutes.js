const router = require("express").Router();
const Workout = require("../models/workout.js");

//// enter all route code here

// get all workouts
router.get("/api/workouts", function(req, res) {
    db.find({}).then(function(workout) {
        res.send(workout);
    })
    .catch(function (err) {
        res.send(err);
    });
});

//create workout

router.post("api/workouts")

//upsdate workout by id

router.put("api/workouts/:id")

// get all the workout stats

router.get


module.exports = router;