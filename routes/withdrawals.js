const express = require('express')
const router = express.Router();
const {initiatewithdrawal, completewithdrawal, getwithdrawal, getallwithdrawals} = require('../controllers/withdrawals');
const verifyToken = require('../verifytoken');

router.post("/", verifyToken, initiatewithdrawal);
router.put("/:id", verifyToken, completewithdrawal);
//get a withdrawal
router.get("/find/:id", getwithdrawal)


//get all users
router.get("/find", getallwithdrawals)


module.exports = router;