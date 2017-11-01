const mongoose = require('mongoose');


// Setting up Mongoose connection with mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_56bwp32h:9lef746kbk7h20d018u0n4ku75@ds119768.mlab.com:19768/heroku_56bwp32h/blogging-application' , { useMongoClient: true } );

module.exports = {
  mongoose
};
