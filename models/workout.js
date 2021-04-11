const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: {
        type: Array,
        default: []
    }
},
{
    toJSON: {
        virtuals: true
    }
});

//need to add in how to calculate the total duration

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;