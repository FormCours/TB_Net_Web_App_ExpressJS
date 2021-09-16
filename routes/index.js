const express = require('express');

const router = express.Router();

require('./homeRouter')(router);


export default router;