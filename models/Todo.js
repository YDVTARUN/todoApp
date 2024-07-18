const mongoose = require("mongoose");
// schema == prop can say
const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required : true,
            maxLength:50,
        },
        description: {
            type: String,
            required : true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required : true,
            default:Date.now(),
        },
        createdAt:{
            type:Date,
            required : true,
            default:Date.now(),
        },
    }
);

module.exports = mongoose.model("Todo",todoSchema);