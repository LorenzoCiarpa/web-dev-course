const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();


router.put("/signUp", authController.signUp)
// router.put("/signUp", authController.handleResponse)

router.post("/login", authController.login)
// router.post("/login", authController.handleResponse)

router.patch("/updatePassword", authController.updatePassword)

router.delete("/deleteUser", authController.deleteUser)
// router.patch("/updatePassword", authController.handleResponse)

// router.get("/getUser", authController.signUp)
// router.get("/getUser", authController.handleResponse)

router.use(authController.handleResponse)


module.exports = router;