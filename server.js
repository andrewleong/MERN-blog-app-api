const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


// create an express app
const app = express();

// Setting up Mongoose connection with mongodb
let { mongoose } = require('./db/mongoose');

// format body as json
app.use(bodyParser.json());
// using cors to allow specific request
app.use(cors());

// allow static dir to access public dir
app.use(express.static(path.join(__dirname + 'client/build')));

// Required application specific custom router module
const router = require('./routes/blogRoutes');
// ask app to use the routes for the API
app.use('/blogposts', router);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
