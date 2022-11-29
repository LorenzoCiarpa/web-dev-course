const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();


router.put("/signUp", authController.signUp)


module.exports = router;