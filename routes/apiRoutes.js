const router = require("express").Router();
const Workout = require("../models/workout.js");

//// enter all route code here

module.exports = app => {

    // get all workouts
app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

//create workout

app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

//update workout by id

app.put("/api/workouts/:id", (req,res) => {
    const { id } = req.params;
    Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    });
})

//get workout by id

// app.get("/api/workouts/:id", (req,res) => {
//     const { id } = req.params;
//     db.findById(id)
//     .then(data => {
//         res.render('', {
//             exercises: exercises,
//             exerciseName: exercises.name,
//             path: '/workout'
//         });
//     })
//     .catch(err => {
//         res.send(err);
//     });    
// })

app.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then(allWorkouts => {
        console.log(allWorkouts);
        res.json(allWorkouts);
    }).catch(err => {
        res.json(err);
    });
})


app.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then(allWorkouts => {
        console.log(allWorkouts);
        res.json(allWorkouts);
    }).catch(err => {
        res.json(err);
    });
})

}