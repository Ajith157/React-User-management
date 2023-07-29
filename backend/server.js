// server.js
const express = require('express');
const colors = require("colors");
const dotenv = require('dotenv').config();
const connectDB = require("./config/db"); 
const app = express();
const port = process.env.PORT;


connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
