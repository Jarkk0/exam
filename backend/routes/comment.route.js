let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Codes Model
let commentSchema = require('../models/Comment');

//comment section
router.post('/create-comment', (req, res, next) => {
    commentSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });
  
  router.route('/').get((req, res, next) => {
    commentSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  router.route('/:id').get((req, res, next) => {
    commentSchema.find({id:req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/create-comment/:id').get((req, res, next) => {
    commentSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/create-comment/:id').put((req, res, next) => {
    commentSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        console.log(error) 
        return next(error);      
      } else {
        res.json(data)
        console.log('Comment updated successfully !')
      }
    })
  })
  module.exports = router;