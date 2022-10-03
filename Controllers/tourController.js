const express = require("express");
const fs = require("fs");
const router = require("../routes/touroutes");

const app = express();
//express.json here is middleware
app.use(express.json());
//json parse so it will automatically be converted into a JS object
const tours = JSON.parse(
  //dir name is the main script
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
//route handler , tours is the resource and v1 is the version1.
//api/v1/tours is the route .
exports.getTours = app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

exports.allTours = (req, res) => {
  console.log(req.params); //The req.params property is an object containing
  //properties mapped to the named route “parameters”.
  // For example, if you have the route /student/:id, then the “id” property is available as req.params.id.
  const id = req.params.id * 1; //converting array into string
  const tour = tours.find((el) => el.id == id); //find is used tosearch elemnts.

  if (!tour) {
    return res.status(404).json({ status: "fail", message: "invalid id" });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  //since we are inside a callback function we are using writefile asynchronous version
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours, (err) => {
      res.status(201).json({ status: "success", data: { tour: newTour } });
    })
  );
};

exports.update = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: "fail", message: "invalid id" });
  }

  res
    .status(200)
    .json({ status: "success", data: { tour: "<json file updated>" } });
};
