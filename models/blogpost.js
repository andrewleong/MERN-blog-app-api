const mongoose = require('mongoose');


// Create schema
const Schema = mongoose.Schema;

// Define collection and schema for blogpost
const blogpost = new Schema({
   title: {
     type: String,
     required: true
   },
   description: {
     type: String,
     required: true
   },
   contents: {
     type: String,
     required: true
   }
}, { collection: 'blogging-application' });

module.exports = mongoose.model('blogpost', blogpost);
