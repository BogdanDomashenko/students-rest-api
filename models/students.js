let mongoose = require('mongoose');

let studentsSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    photo: String,
    mark: Number,
    isDonePr: Boolean,
    name: String,
    group: String,
    __v: Number
});

module.exports = mongoose.model('students', studentsSchema);