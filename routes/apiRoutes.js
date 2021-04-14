let db = require("../models/workout");
const router = require("express").Router();
const Workout = require("../models/workout.js");

//// enter all route code here

module.exports = app => {

    // get all workouts
app.get("/api/workouts", (req, res) => {
    db.find({}).then(workout => {
        res.send(workout);
    })
    .catch(err => {
        res.send(err);
    });
});

//create workout

app.post("api/workouts", ({ body }, res) => {
    db.create(body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    });
});

//update workout by id

app.put("api/workouts/:id", (req,res) => {
    const { id } = req.params;
    db.findByIdAndUpdate(id, { $push: {exercises: req.body} })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err);
    });
})

//get workout by id

app.get("api/workouts/:id", (req,res) => {
    const { id } = req.params;
    db.findById(id)
    .then(data => {
        res.render('', {
            exercises: exercises,
            exerciseName: exercises.name,
            path: '/workout'
        });
    })
    .catch(err => {
        res.send(err);
    });    
})

// get all the workout stats

app.get("api/workouts", (req, res) => {
    db.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then(allWorkouts => {
        console.log(allWorkouts);
        res.send(allWorkouts);
    }).catch(err => {
        res.send(err);
    });
})

}