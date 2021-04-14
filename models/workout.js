const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
         type: {
             type: String,
             trim: true,
             required: "Please enter a type of exercise",
         },
         name: {
             type: String,
             trim: true,
             required: "Please enter the name of the exercise",
         },
         duration: {
             type: Number,
             required: "Please enter the duration of the exercise in minutes",
         },
         weight: {
             type: Number
         },
         reps: {
             type: Number
         },
         sets: {
             type: Number
         },
         distance: {
             type: Number
         }
         },
    ]
},
{
    toJSON: {
        virtuals: true
    }
});


// app.get("/api/workouts", (req, res) => {
//     db.aggregate([{
//         $addFields: {
//             totalDuration: {
//                 $sum: "$exercises.duration"
//             }
//         }
//     }]).then(allWorkouts => {
//         console.log(allWorkouts);
//         res.send(allWorkouts);
//     }).catch(err => {
//         res.send(err);
//     });
// })
//need to add in how to calculate the total duration

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;