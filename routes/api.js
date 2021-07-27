const router = require('express').Router();
const Workout = require('../models')


router.get("/api/workouts", (req, res) => {

    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .then((Workoutdb) => {
            res.json(Workoutdb)
        })
        .catch((err) => {
            res.json(err)
        })

});


router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .then((Workoutdb) => {
            res.json(Workoutdb)
        })
        .catch((err) => {
            res.json(err)
        })

});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
    )
        .then((Workoutdb) => {

            res.json(Workoutdb)
        })
        .catch((err) => {
            res.json(err)
        })

});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((Workoutdb) => {
            res.json(Workoutdb)
        })
        .catch((err) => {
            res.json(err)
        })
});



module.exports = router;