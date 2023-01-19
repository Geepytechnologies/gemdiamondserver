const express = require('express')
const router = express.Router();
const {addPackage, getpackage, updatepackage, getallpackages, deletepackage} = require('../controllers/packages');
const verifyToken = require('../verifytoken');

router.post("/", verifyToken, addPackage);
router.get("/find/:id", getpackage);
router.get("/find", getallpackages);
router.put("/:id", verifyToken, updatepackage)
router.delete("/:id", verifyToken, deletepackage)

module.exports = router;