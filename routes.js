const Students = require('./models/students.js');
const mongoose = require('mongoose');

const users = [
    {name: 'Domashenko', age:'18'},
    {name: 'user002', age:'322'}
];


module.exports = function (app) {
    app.get("/students", (req, res) => {
        Students.find((err, students) => {
            if (err)
              res.send(err);

            res.json(students);
          }); 
    });

    app.get("/students/:id", (req, res) => {
        const reqParameterID = req.params.id;

        Students.findOne({_id: reqParameterID}, function(err, student) {
            if (err) {
              console.log(err);
            } else {
                res.json(student);
            }
          });
    });

    app.get("/students/name/:name", (req, res) => {
        const reqParameterNAME = req.params.name;

        Students.findOne({name: reqParameterNAME}, function(err, student) {
            if (err) {
              console.log(err);
            } else {
                res.json(student);
            }
          });
    });

    app.post("/", (req, res) => {
        res.send(users);
    });
}