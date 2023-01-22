const express = require('express')
const router = express.Router();
const {initiatedeposit, completedeposit, getdeposit, getalldeposits} = require('../controllers/deposits');
const {verifyToken} = require('../verifytoken');

router.post("/", verifyToken, initiatedeposit);
router.put("/:id", verifyToken, completedeposit);
//get a deposit
router.get("/find/:id", getdeposit)


//get all deposits
router.get("/find", getalldeposits)

module.exports = router;