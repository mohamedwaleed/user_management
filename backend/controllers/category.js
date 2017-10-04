var express = require('express');
var router = express.Router();
const categoryService = require('../services/category-service');

router.get('/', async (req, res, next) => {
  try {
    var categoriesDtos = await categoryService.getAllCategories();
    var response = {
      data: categoriesDtos
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
