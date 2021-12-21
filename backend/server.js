let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
let basicAuth = require('express-basic-auth');

// Express Route
const codeRoute = require('./routes/code.route') //ad
const userRoute = require('./routes/user.route')
const commentRoute = require('./routes/comment.route')

const auth = basicAuth({
  users: {
    admin: '123',
    user: '456',
  },
});



// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/code',codeRoute)
app.use('/user',userRoute)
app.use('/comment',commentRoute)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.get('/authenticate', auth, (req, res) => {
  if (req.auth.user === 'admin') {
    res.send('admin');
  } else if (req.auth.user === 'user') {
    res.send('user');
  }
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});