const express = require('express');
const dotenv = require('dotenv').config();

const authRouter = require('./routes/authRouter')

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

let server = app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port: ", process.env.PORT || 5000);
});