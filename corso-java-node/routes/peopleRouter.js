const express = require('express');
const peopleController = require('../controllers/peopleController');

const router = express.Router();


router.get("/", (req, res, next) => { //"/people" + "/"
    console.log("Rotta People /")
    return res.status(200).send("People")
})

router.get("/test", (req, res, next) => { //"/people" + "/test"
    console.log("Rotta People /test")
    return res.status(200).send("People test")
})

router.get("/getPeopleByAge", peopleController.getPeopleByAge)

router.get("/getInfoFromWebsite", peopleController.getInfoFromWebsite)






// router.get("/getMessage/:name/:surname", authController.getNormalMessage);

// router.post("/getJson", authController.getJson);

// router.get("/getHtml", authController.getHtml);

// router.get("/getHtmlView", authController.getHtmlView);

// router.post("/clearCookies", authController.clearCookies)


  
//   router.post("/api", (req, res, next) => {
  
//     console.log("Rotta Post")
//     res.status(200).send("Rotta Post")
//     return;
//   })
  
//   router.put("/api", (req, res, next) => {
  
//     console.log("Rotta Put")
//     res.status(200).json({response: "Rotta Put"})
//     return;
//   })
  
//   router.patch("/api", (req, res, next) => {
  
//     console.log("Rotta patch")
//     res.status(200).json({response: "Rotta patch"})
//     return;
//   })
  
//   router.delete("/api", (req, res, next) => {
  
//     console.log("Rotta Delete")
//     res.status(200).json({response: "Rotta Delete"})
//     return;
//   })
  
  



// router.post("/checkAccountSigned", authController.login);


module.exports = router;