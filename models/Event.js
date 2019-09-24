const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EventSchema = new Schema({
    created_at:{
        type: Date,
        required: true,
        default: Date.now()
    },
    creator:{
        type: String,
        required: true
    },
    attending:[{
        type: String
    }],
    locationName:{
        type: String,
        required: true
    },
    locationAddress:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    notes:{
        type: String
    }


})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
