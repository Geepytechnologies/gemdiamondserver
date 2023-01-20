const express = require('express')
const router = express.Router();
const {signup, signin,changepassword} = require('../controllers/auth');

router.post('/signup', signup)

router.put('/changepassword',changepassword)

router.post('/signin', signin);

module.exports = router;