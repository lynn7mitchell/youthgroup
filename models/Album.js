const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    title:{
        type: String,
        required: true
        
    },
    date:{
        type: Date,
        default: Date.now
    },
    thumbnail:{

    },
    images:[
        {
        // image: buffer
    }
   ],
   creator:{

   }

})

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
