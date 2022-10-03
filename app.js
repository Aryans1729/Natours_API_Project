const express = require("express");
const fs = require("fs");
const app = express(); // app is a variable here which can use now all methods of express function
const morgan = require("morgan"); //morgan is the third party middleware

const tourRouter = require("./routes/touroutes");
const UserRouter = require("./routes/useroutes");

app.use(express.json()); //app.use here is a middleware

//1. MIDDDLEWARES
/*app.use((req, res, next) => {
  // creating our own middleware function
  //always assign AT GLOBAL LEVEL before all routes
  console.log("hello from the middleware");
  next();
});

app.use((req, res, next) => {
  //creating again our own middleware function requesting date and time
  req.requestTime = new Date().toISOString();
  next();
});
*/

// 4.START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

/*
app.get("/", (req, res) => {
  res
    .status(404)
    .json({ message: "Hello from this side of the server", app: "natours" });
});

app.post("/", (req, res) => {
  res.status(404).send("you can now post whatever you want");
});
*/
