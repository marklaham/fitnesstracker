
const router = require('express').Router();
const path = require('path');


// this connects the / route to the ../public/index.html
router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"));;
});
//this connects the /exercise to ../public/exercise.html
router.get("/exercise", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));;
});
//this connects the /stats to the ../public/stats.html
router.get("/stats", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));;
});


module.exports = router;