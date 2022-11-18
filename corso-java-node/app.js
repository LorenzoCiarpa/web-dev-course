const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');


//REQUIRE ROUTERS
const authRouter = require('./routes/authRouter');

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

// set the view engine to ejs
app.set('view engine', 'ejs');

//ROUTES
app.use("/auth", authRouter);

//SERVER LISTEN
app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port: ", process.env.PORT || 5000);
});
