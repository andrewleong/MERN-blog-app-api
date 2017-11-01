const mongoose = require('mongoose');


// Setting up Mongoose connection with mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blogging-application' , { useMongoClient: true } );

module.exports = {
  mongoose
};
