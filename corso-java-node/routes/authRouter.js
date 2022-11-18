const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get("/getMessage/:name/:surname", authController.getNormalMessage);

router.post("/getJson", authController.getJson);

router.get("/getHtml", authController.getHtml);

router.get("/getHtmlView", authController.getHtmlView);

// router.post("/clearCookies", authController.clearCookies)

 




// router.post("/checkAccountSigned", authController.login);


module.exports = router;