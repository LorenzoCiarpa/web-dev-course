const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRouter')
const peopleRouter = require('./routes/peopleRouter')

  
//EXPRESS
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  credentials: true
}));
server.use(cookieParser());

//ROTTE (rotta base)
server.use("/auth", authRouter)

server.use("/people", peopleRouter)

server.use("/people", peopleRouter)



// server.get("/people/getAll", (req, res, next) => {

//   console.log("Rotta 1");
//   next();

// })

// server.get("/people/getBy", (req, res, next) => {

//   console.log("Rotta 2")
//   res
//   .status(200)
//   .send("Rotta 2")

//   return;
// })

// server.get("/people/set", (req, res, next) => {

//   console.log("Rotta 3")
//   res
//   .status(200)
//   .send("Rotta 3")

//   return;
// })

//SERVER LISTEN
server.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port: ", process.env.PORT || 5000);
});

// let str = '/api'

// function cb(req, res, next){

//   console.log("Rotta 3")
  

// }

// server.get(str, cb)

// server = {
//   get: function(str_, myCallback){
//     myCallback(this.req, this.res, this.next)
//   },

//   next: function(){
//     let arr = this.rotte[this.rottaInquestione] //["Rotta 1", "Rotta 2", "Rotta 3"]
//     let rottaNow = this.rottaAttuale  //0
    
//   },

//   rotte:{
//     "/api": ["Rotta 1", "Rotta 2", "Rotta 3"],
//     "/apiDiversa": ["apiDiversa"]
//   },

//   rottaAttuale: 0,
//   rottaInQuestione: "/api",

//   req: {},
//   res: {}
// }