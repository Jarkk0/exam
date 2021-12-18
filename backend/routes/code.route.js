let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Codes Model
let codeSchema = require('../models/Code');

// CREATE Code //pitäää katsoa onko olemassa samaa idtä
router.post('/create-code', (req, res, next) => {
  codeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/').get((req, res, next) => {
  codeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/create-code/:id').get((req, res, next) => {
  codeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/create-code/:id').put((req, res, next) => {
  codeSchema.findByIdAndUpdate(req.params.id, {
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
