const express = require('express')
const router = express.Router();
const {signup, signin,signout,changepassword} = require('../controllers/auth');

router.post('/signup', signup)

router.put('/changepassword',changepassword)

router.post('/signin', signin);

router.get('/signout', signout);

module.exports = router;