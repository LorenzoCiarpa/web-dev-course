const express = require('express');
const carsController = require('../controllers/carsController');

const router = express.Router();


router.post("/getCar", carsController.getCar)

router.delete("/deleteCar", carsController.deleteCar)

router.post("/createCar", carsController.createCar)




module.exports = router;