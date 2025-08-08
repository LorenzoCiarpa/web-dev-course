const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const ws = require('express-ws')

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const authRouter = require('./routes/authRouter')
const peopleRouter = require('./routes/peopleRouter')
const carsRouter = require('./routes/carsRouter')

  
//EXPRESS
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  credentials: true
}));
app.use(cookieParser());

const wsServer = ws(app);

//ROTTE (rotta base)
// server.use("/auth", authRouter)
app.put("/auth", authController.signUp)
app.post("/auth", authController.login)

app.use("/people", peopleRouter)

app.use("/cars", carsRouter)



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
let server = app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port: ", process.env.PORT || 5000);
});

//system comunication design



// //SHORT POLLING
// /*
//   FE PERFORMS MULTIPLE FETCH EVERY x SECONDS, 
//   BE CAN ANSWER WITH AN EMPTY OBJECT OR RETURN AN OBJECT
  
//   BAD IMPLEMENTATION, RESOURCE INTENSIVE BOTH SIDE

//   BE IMPLEMENTATION IS THE CLASSIC API REST(ful) NO DIFFERENCES
// */

// //LONG POLLING
// /*
//   FE PERFORMS 1 CALL EVERY (TIMEOUT_TIME)30-60 SECONDS, 
//   BE WILL ANSWER WHEN WILL HAVE SOMETHING TO RETURN OR NOT RETURNS AT ALL,
//   TEORICALLY BE CAN RETURN MULTIPLE RESPONSES, PRATICALLY IT WILL RETURN AT MOST 1
  
//   BETTER IMPLEMENTATION, MUST KEEP AN ARRAY OR A STRUCTURE TO SAVE ALL OPEN CONNECTIONS
  
// */

// //SSE (SERVER SENT EVENTS)
// /*
//   FE REGISTERS TO AN EVENT EMITERR (new EventSource('route')) AND LISTEN, 
//   BE WILL SAVE THE CONNECTION AND WILL PUSH EVERY TIME HAS SOMETHING TO PUSH
  
//   BEST IMPLEMENTATION FOR SERVERNOTIFICATIONS, 
//   MUST KEEP AN ARRAY OR A STRUCTURE TO SAVE ALL OPEN CONNECTIONS
// */

// //SSR (SERVER SIDE RENDERING) (More a design pattern than a system communication design)
// /*
//   EVERYTHING IS HANDLED IN BE, ALSO THE HTML, CSS, JS
// */

// //WEBSOCKET (SOCKET)
// /*
//   A BIDIRECTIONAL CONNECTION IS ESTABLISHED BETWEEN FE AND BE, BOTH CAN SEND AND RECEIVES MULTIPLE MESSAGES
//   IN ONE INSTANCE, AND CAN LAST FOREVER

//   BEST IMPLEMENTATION WHEN WE HAVE A LIVE APPLICATION (LIVE CHAT, GAME) WITH MULTIPLE USERS
//   OR WHEN VERY OFTEN MUST BE RE-RENDERED INFOs FROM BE TO FE OR VICE-VERSA
// */

// //REST API

// //SHORT POLLING(CLASSIC IMPLEMENTATION)
// app.get("/shortPolling", (req, res, next) => {
  
//   res
//   .status(200)
//   .send("ShortPolling")
//   return;
// })

// //LONG POLLING
// let connections = []
// app.get("/longPolling", (req, res, next) => {

//   console.log("Rotta 2")
//   res.set("Content-Type", "text/html; charset=utf-8")
//   res.set("Transfer-Encoding", "chunked")//Needed to send multiple response

//   connections.push(res)
  
//   // for(let i = 0; i < 10; i++){
//   //   res.write("LongPolling\n") 
//   // }
//   // res.end();
//   // setInterval(() => {
//   //   console.log("Sending")
//   //   res.write("LongPolling\n") // non performa la end() come la send o la json
//   //   // res.end() // don't use or error would be launched, but without this response isn't close with write

//   // }, 1500)
//   return;
// })

// // function sendBroadcast(connections){
// //   for(let res of connections){
// //     res.write("Update\n")
// //     // res.end()
// //   }

// // }
// // setTimeout(() => {
// //   sendBroadcast(connections);
// // }, 5000)

// let sseConnections = {}

// let lastConnections = {}

// //SSE
// app.get("/stream", async (req, res, next) => {

  
//   // console.log("query: ", req.query)


//   // let email = req.query.email;


//   res.setHeader('Connection', 'keep-alive');

//   res.setHeader("Cache-Control", "no-cache");

//   res.setHeader("Content-Type", "text/event-stream");

//   res.setHeader('Access-Control-Allow-Origin', '*',);

//   res.setHeader('Access-Control-Allow-Credentials', 'true');

//   res.status(200);
  
  

//   sseConnections[email] = res;



//   // let event = "event: ping";

//   // let id = `id: ${email}`;

//   // let data = {
//   //    message:`hello ${email}`
//   // }

//   // data = "data: " + JSON.stringify(data);

//   // // res.end(`${event}\n${id}\n${data}\n\n`);
//   // for(let i = 0; i < 1; i++){
//   //   res.write(`${event}\n${id}\n${data}\n\n`)  // "data: "<-this space is MANDATORY, \n\n are MANDATORY
//   // }
//   // res.end()

// })

// let index = 0;
// function sendMessageByEmail(email){
//   let objProp = Object.getOwnPropertyNames(sseConnections);
//   if(!objProp.includes(email)) return;
  
//   let event
  
//   if(index % 2 == 0){
//     event = "event: click";
//   }
//   else{
//     event = "event: ping";
//   }

//   index ++;

//   let data = {
//      message:`hello ${email}`
//   }

//   data = "data: " + JSON.stringify(data);

//   sseConnections[email].write(`${event}\n${data}\n\n`); ///.write == .send con differenza che la send invoca la res.end()
//   // sseConnections[email].write(`${data}\n\n`); ///.write == .send con differenza che la send invoca la res.end()
// }

// // setInterval(() => {
// //   console.log("Launching")
// //   sendMessageByEmail('lorenzo@gmail.com')
// // }, 5000)

// /*
// FE MUST INSTANTIATE 
// let sse = EventSource("localhost:5000/stream")
// let sse.onopen = (event) => { console.log(event.data) }
// let sse.onmessaga = (event) => { console.log(event.data) }

// SEE FE FOLDER
// */

// //WEBSOCKET

// // app.ws('/wss', (ws, req) => {
// //   console.error('websocket connection');

// //   console.log(req.cookies)
// //   console.log(req.query)

// //   ws.onmessage = (e) => {
// //     console.log(e)
// //   } 

// //   for (let t = 0; t < 3; t++)
// //     setTimeout(() => ws.send('message from server', () => {}), 1000 * t);
// // });


// //JWT


// app.get("/jwt", (req, res, next) => {
//   //auth
//   let email = req.query.email

//   let jwtToken = jwt.sign({ email: email }, process.env.SECRET_KEY_JWT, {
//     expiresIn: "1d"
//   });

//   let now = new Date().getTime();

//   return res
//   .cookie("jwtToken_" + email, jwtToken, {
//       httpOnly: true,
//       expires: new Date(now + 2 * 3600  * 1000)//2h * 1000 milliseconds
//   })
//   .status(200)
//   .json({
//       success: true,
//       data: {
//           jwt: true
//       }
//   });
// })


// JWT RECOVER

//   let jwtDecoded
//   try{
//     jwtDecoded = jwt.verify(req.cookies[prop], process.env.SECRET_KEY_JWT); //we can also pass a callback

//   }catch(error){
//     console.log("Error in verfying jwt: ", error)
//     return next("Error in jwt verify")
//   }

//MIDDLEWARE
//ESEMPIO MIDDLEWARE GENERALE SU TUTTE LE ROTTE
// app.use((req, res, next) => {
//   console.log("middleware jwt recover")

//   //recover jwt 

//   req.locals = {
//     email: "jwt"
//   }

//   next()
// })

//ESEMPIO LANCIO ERRORE CON GESTORE

// // app.use( (req, res, next) => {  
// //   console.log("throw error")
// //   throw "Errore test"

// // })


//ESEMPIO MIDDLEWARE SU UNA ROTTA SPECIFICA

// //primo gestore
// app.get("/addPropsReq", (req, res, next) => {

//   //ricavo pk da jwt
//   console.log("addPropsReq primo")
//   console.log("testing: ", req.testing)
//   console.log("locals: ", req.locals)

//   req.testing = {
//     success: true
//   }
  
//   console.log("addPropsReq fine primo")

//   next('parmetro di errore')

// })

// //secondo gestore
// app.get("/addPropsReq", (req, res, next) => {

//   console.log("addPropsReq secondo")
//   console.log("testing: ", req.testing)
//   console.log("locals: ", req.locals)
//   console.log("addPropsReq fine secondo")


//   // return res.status(200).json({
//   //   success: true
//   // })

//   // for errorHandler middleware that skip other middleware without err
//   // con questo next ritorerò al FE "Test response"

//   next()  

// })

//ESEMPIO LANCIO ERRORE PASSANDO err obj dentro next(err)

// app.get("/errorHandled", (req, res, next) => {

//   console.log("pre")
//   next("Errore in errorHandled")
// })

//MIDDLEWARE PER GESTIRE ERRORI

// app.use((err, req, res, next) => {

//   console.log("ErrorHandler ", err)
//   res
//   .status(200)
//   .send("ErrorHandler")
  
//   return;
// })


//MIDDLEWARE PER GESTIRE ERRORI

// app.use((req, res, next) => {
//   console.log("middleware generale")
//   res
//   .status(200)
//   .send("Test response")

//   return;
// })


//   //res.end();  //end the response but keep the connection alive
//   //res.set("Connection", "close")  //start termination sequence (set header Connection)
//   //res.connection.end(); //Half-closes the socket. i.e., it sends a FIN packet. It is possible the server will still send some data.
//   //res.connection.destroy(); no more packets sent on this socket


// //Correct way to run the server, waiting for a var from DB to check if all is ok


// // let server
async function startServer(app){
  let openServer = await AuthQueries.getUser('lorenzo@prova.it, test');

  
  console.log("openServer array: ", openServer)

  if(openServer==true){
    server = app.listen(process.env.PORT || 5000, () => {
      console.log("server started on port: ", process.env.PORT || 5000);
    });
  }

  //Close the server after 5 seconds

  // setTimeout(() => {
  //   server.close((err) => {
  //     console.log("Server Closed")
  //     // process.exit(err ? 1 : 0)
  //   })
  // }, 5000)

  //GRACEFULLY SHUT DOWN

  //Close a SIGTERM signal is triggered

  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    // console.log('Closing http server.');
    // server.close((err) => {
    //   console.log('Http server closed.');
    //   process.exit(err ? 1 : 0);
    // });
  });

  //Close a SIGTERM signal is triggered

  process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    // console.log('Closing http server.');
    // server.close((err) => {
    //   console.log('Http server closed.');
    //   process.exit(err ? 1 : 0);
    // });
  });

  //Handle an uncaughtException

  process.on("uncaughtException", error => {
    console.log('uncaughtException', error);

    // errorHandler.handleError(error);
  });

  //Handle an unhandledRejection
  
  process.on("unhandledRejection", (reason) => {
    console.log('unhandledRejection', reason);
    
    // errorHandler.handleError(reason);
  });

  //ALTERNATIVES FOR GRACEFULLY SHUT DOWN

  //

  // const server = app.listen(port);
  // console.log(`listening on port:${port}`);
  // for (let signal of ["SIGTERM", "SIGINT"])
  //     process.on(signal, () => {
  //         console.info(`${signal} signal received.`);
  //         console.log("Closing http server.");
  //         server.close((err) => {
  //             console.log("Http server closed.");
  //             process.exit(err ? 1 : 0);
  //         });
  //     });


  //Alternative after node v18
//   process.on('SIGINT', gracefulShutdown)
// process.on('SIGTERM', gracefulShutdown)

// function gracefulShutdown (signal) {
//   if (signal) console.log(`\nReceived signal ${signal}`)
//   console.log('Gracefully closing http server')

//   // closeAllConnections() is only available from Node v18.02
//   if (server.closeAllConnections) server.closeAllConnections()
//   else setTimeout(() => process.exit(0), 5000)

//   try {
//     server.close(function (err) {
//       if (err) {
//         console.error('There was an error', err)
//         process.exit(1)
//       } else {
//         console.log('http server closed successfully. Exiting!')
//         process.exit(0)
//       }
//     })
//   } catch (err) {
//     console.error('There was an error', err)
//     setTimeout(() => process.exit(1), 500)
//   }
// }

}

//app LISTEN



// PRENDERE INPUT DA CONSOLE
// var stdin = process.openStdin();

// stdin.addListener("data", function(d) {
//     // note:  d is an object, and when converted to a string it will
//     // end with a linefeed.  so we (rather crudely) account for that  
//     // with toString() and then trim() 
//     console.log("you entered: [" + 
//         d.toString().trim() + "]");
//   });