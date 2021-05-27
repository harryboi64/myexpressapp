var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/User");

//GET signup page. 
router.get('/', function (req, res, next) {
  res.render('signup', { title: 'Signup' });
});



router.use(bodyParser.urlencoded({ extended: true }))

/* Gets data from Mongo */
const mongoose = require('mongoose');
const uri =
  'mongodb+srv://harrybo:Suncrusher3@cluster0.vyrdt.mongodb.net/sample_users?retryWrites=true&w=majority'



mongoose.connect(uri, { useUnifiedTopology: true });
const db = mongoose.connection;


//db.once('open', () => {





// validation
const { registerValidation, loginValidation } = require("../validation");

// register route
router.post("/createUser", async (req, res) => {
  // validate the user
  const { error } = registerValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });

  // throw error when email already registered
  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password,
  });

  try {
    const savedUser = await user.save();
    //res.json({ error: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });


    User.then(result => {
      console.log(result)
      //res.status(201).json({
        //message: 'User Created'

      })
        .catch(error => console.error(error))
    }
  res.redirect('/')
});


module.exports = router;