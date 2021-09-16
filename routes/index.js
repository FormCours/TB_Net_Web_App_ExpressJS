const express = require('express');

const router = express.Router();

require('./homeRouter')(router);


module.exports = router;