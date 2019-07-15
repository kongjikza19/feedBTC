var express = require('express');
var router = express.Router();
const feedBTC = require('../controller/feedBTC')

/*Feed BTC price*/
router.get('/?', feedBTC.price);

module.exports = router;
