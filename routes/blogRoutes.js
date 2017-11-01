const express = require('express');
const {ObjectID} = require('mongodb');

const router = express.Router();
const app = express();

// import the blogpost model
let blogpost = require('../models/blogpost');

// ROUTES
// CREATE A POST
router.post('/post' , (req,res) => {
  const post = new blogpost(req.body);
  console.log(post);
  // saving the req.body(json obj) to database
  post.save()
  .then( (results) => {
    res.status(200).json({results});
  })
  .catch( (err) => {
    return res.status(400).send('Bad Request, check object name');
  })
});

// GET ALL POSTS
router.get('/api/posts', (req,res) => {
  blogpost.find().then( (results) => {
    // if(results.length === 0){
    //   return res.status(404).json('There are no existing blog post! Pls create some.');
    // }
    res.status(200).json({results});
  })
  .catch ( (err) => {
    return res.status(400).json(err);
  })
});

// GET ONE POST
router.get('/post/:id', (req,res) => {
  const { id } = req.params;
  // Validate ID using isValid
  if(!ObjectID.isValid(id)){
    return res.status(404).send(`Invalid ID, no such ID here`);
  }
  blogpost.findById(id)
  .then( (results) => {
    res.status(200).json({results});
  })
  .catch( (res) => {
    return res.status(400).send('Bad request Unable to fetch the specific post');
  })
})

// UPDATE ONE POST
router.patch('/post/:id', (req,res) => {
  const { id } = req.params;
  // Validate ID using isValid
  if(!ObjectID.isValid(id)){
    return res.status(404).send(`Invalid ID, no such ID here`);
  }
  blogpost.findById(id)
  .then( (results) => {
    if (!results) {
      return next(new Error('Could not load Document'));
    }
    // Getting the specific json to overwrite
    results.title = req.body.title;
    results.description = req.body.description;
    results.contents = req.body.contents;
    results.save()
    .then( (newResults) => {
      res.json({newResults});
    })
  })
  .catch( (err) => {
    return res.status(400).send(err);
  })
});

// DELETE ONE POST
router.delete('/post/:id', (req,res) => {
  const { id } = req.params;
  if(!ObjectID.isValid(id)){
    return res.status(404).send(`Invalid ID, no such ID here`);
  }
  blogpost.findByIdAndRemove(id)
  .then( (results) => {
    if(!results){
      return res.status(404).send('Post Not Found');
    };
    res.status(200).json({results});
  })
  .catch( (err) => {
    return res.status(400).send(err);
  })
});

module.exports = router;
