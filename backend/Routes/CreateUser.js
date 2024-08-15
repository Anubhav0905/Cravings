const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const jwtSecret = "MynameisAnubhavShuklaAndIamgoood"

router.post(
  "/createuser",
  [
    body("Email", 'Enter a valid E-mail').isEmail(),
    body("Password", 'Enter a valid Password').isLength({ min: 5 }),
    body("Name",'Enter a valid Name').isLength({ min: 3 }),
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.Password, salt)
    
    try {
      await User.create({
        name: req.body.Name,
        password: secPassword,
        email: req.body.Email,
        location: req.body.Location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/loginuser",
  [
    body("Email", 'Enter a valid E-mail').isEmail(),
    body("Password", 'Enter a valid Password').isLength({ min: 5 }),
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array() });
    }
    
    let email = req.body.Email;
    try {
      let userData = await User.findOne({email})
      if(!userData){
        return res.status(400).json({errors: "E-mail Not Found! Pls Enter Correct E-mail"})
      }
      
      const pwdCompare = await bcrypt.compare(req.body.Password, userData.password)
      if(!pwdCompare){
        return res.status(400).json({errors: "Enter correct Password!"})
      }

      const data = {
        user: {
          id : userData.id
        }
      }
      const authToken = jwt.sign(data,jwtSecret)
      return res.json({success: true, authToken : authToken})

    }
    
    
    catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
