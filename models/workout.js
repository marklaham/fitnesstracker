const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creates the workout schema 
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: 'Select exercise type',
            },
            name: {
                type: String,
                require: 'Enter exercise name',
            },
            duration: {
                type: Number,
                required: 'Enter an exercise duration ',
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;