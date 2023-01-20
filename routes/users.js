const express = require("express");
const { update, deleteUser, getUserById,getUserByProp, getAllUsers } = require("../controllers/users.js");
const verifyToken = require('../verifytoken');


const router = express.Router();

//update user
router.put("/:id",verifyToken, update)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get a user
router.get("/find/:id", getUserById)

router.post("/find/one", getUserByProp)


//get all users
router.get("/find", getAllUsers)

module.exports = router;
