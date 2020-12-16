var express = require('express');
var router = express.Router();
var bodyParser=require("body-parser"); 

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

module.exports = router;

router.use(bodyParser.urlencoded({ extended: true }))

/* Gets data from Mongo */
const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://harrybo:Suncrusher3@cluster0.vyrdt.mongodb.net/sample_users?retryWrites=true&w=majority'



MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    return console.error(err)
  }
  console.log('Connected to Database')

const database = client.db('sample_users');
const usersCollection = database.collection('users');

  
router.get('/', (req, res) => {
  usersCollection.find().toArray()
  .then(users => {
  res.render('signup.pug', { users: users })
})
.catch(/* ... */)
})

router.post('/api/createUser', (req, res) => {
  usersCollection.insertOne(req.body)
  .then(result => {
    console.log(result)
    res.redirect('/signup')
  })
  .catch(error => console.error(error))
})
})
