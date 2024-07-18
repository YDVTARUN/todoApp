const mongoose = require('mongoose');

require("dotenv").config();// jo bhi env mein define kra hoga wo feed hojayega proceess mein

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{ // returns a promise
            useNewurlParser:true,
            useUnifiedTopology:true,
        })
        .then(() => {
            console.log("connection successful")
        })
        .catch( (error) => {
            console.log("recieved an error");
            process.exit(1);
        })
}

module.exports = dbConnect;