const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    id: {
        type: String
    }, 
    comment: {
        type: String
    }
}, {
    collection: 'comment'
  })

module.exports = mongoose.model('Comment', commentSchema)