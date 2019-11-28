const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JeepneySchema = new Schema({
    jeepney: {type: String, required: true},
    places: {type: String, required: true}
});

module.exports = mongoose.model('Jeep', JeepneySchema);