// express web app instance
const express = require("express");

// parse request body to json
const body_parser = require("body-parser");

// for File IO
const path = require("path");

// make food database (raw .json file) available globally in app
global.order_db = path.join(__dirname, "./data/order_db.json");

// users data available globally in app
global.user_db = path.join(__dirname, "./data/users.json");

const web_route = require("./routes/web/home");
const api_route = require("./routes/api");

const app = express();

// Set the view engine for web routes
app.set("view engine", "pug");

app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api_route); // API routes
app.use("/", web_route); // web routes

// redirect to home page if unknown requests requested
app.use((req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// require('dotenv').config()
// const path = require('path')

// const express = require('express')

// const api_router = require('./router/api')

// const app = express()

// app.use(express.json())

// app.use('/api', api_router)

// const port = process.env.PORT || 3000

// app.listen(port, ()=>{
//     console.log('app running at port: ' + port)
// })
