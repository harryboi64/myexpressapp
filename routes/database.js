var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')



/* GET database page. */
// router.get('/', function (req, res, next) {
//   res.render('database', { title: 'database' });
// });

module.exports = router;


router.use(bodyParser.urlencoded({ extended: true }))

/* Gets data from Mongo */
const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://harrybo:Suncrusher3@cluster0.vyrdt.mongodb.net/sample_quotes?retryWrites=true&w=majority'



MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    return console.error(err)
  }
  console.log('Connected to Database')
  const database = client.db('sample_quotes');
  const quotesCollection = database.collection('quotes');


  router.get('/', (req, res) => {
    quotesCollection.find().toArray()
      .then(quotes => {
      res.render('database.pug', { quotes: quotes })
  })
  .catch(/* ... */)
  })

  router.post('/api/createQuote', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
        res.redirect('/database')
      })
      .catch(error => console.error(error))
  })
})



// app.use(/* ... */)
// app.get(/* ... */)
// app.post(/* ... */)






