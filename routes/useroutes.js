const express = require("express");
const UserRouter = express.Router();
const usercontroller = require("./../Controllers/usercontroller");

UserRouter.route("/")
  .get(usercontroller.allUsers)
  .post(usercontroller.createUser);
UserRouter.route("/:id")
  .get(usercontroller.getusers)
  .patch(usercontroller.updateUser);

module.exports = UserRouter;
