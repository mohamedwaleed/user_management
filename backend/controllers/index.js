var express = require('express');
var router = express.Router();
var user = require('./user');
var group = require('./group');
var categoty = require('./category');
var search = require('./search');

router.use('/users', user);
router.use('/groups', group);
router.use('/categories', categoty);
router.use('/search', search);

module.exports = router;
