const mongoose = require('mongoose')
const SensorDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    value: {
        type: Number,
        required: true
    },

    receiveTime: {
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('SensorData',SensorDataSchema)