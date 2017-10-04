var express = require('express');
var router = express.Router();
const searchService = require('../services/search-service');

router.post('/', async (req, res, next) => {
  try {
    var searchQuery = req.body;
    if(searchQuery.searchTerm) {
      searchQuery = searchQuery.searchTerm;
    }
    var searchResultDto = await searchService.search(searchQuery);
    var response = {
      data: searchResultDto
    };
    res.send(response);
  } catch (ex) {
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});

module.exports = router;
