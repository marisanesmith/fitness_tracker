let db = require("../models/workout");
const router = require("express").Router();
const Workout = require("../models/workout.js");

//// enter all route code here

module.exports = function(app) {

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

// app.post("/api/workouts", (req, res) => {
//     db.create(req.body)
//     .then(data => {
//         res.send(data);
//     })
//     .catch(err => {
//         res.send(err);
//     });
// });

//update workout by id

// app.put("/api/workouts/:id", (req,res) => {
//     const { id } = req.params;
//     db.findByIdAndUpdate(id, { $push: { exercises: req.body } })
//     .then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         res.send(err);
//     });
// })

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

app.get("/api/workouts/range", (req,res) => {
    db.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
     });
});

}