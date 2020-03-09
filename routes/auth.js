var express = require('express');
var router = express.Router();
var controller = require("../controllers/auth");

/* GET users listing. */
router.get('/login', controller.login);

router.post('/login', controller.register);



module.exports = router;
