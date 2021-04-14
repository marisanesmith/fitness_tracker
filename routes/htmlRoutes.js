const path = require('path');


module.exports = function(app) {

    // file path for '/' (index.html)
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    // file path for '/exercise'
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

    // file path for '/stats'
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });
};