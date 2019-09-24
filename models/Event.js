const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EventSchema = new Schema({
    created_at:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
