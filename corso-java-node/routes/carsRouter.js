const express = require('express');
const carsController = require('../controllers/carsController');

const router = express.Router();


router.put("/getCar", carsController.getCar)




module.exports = router;