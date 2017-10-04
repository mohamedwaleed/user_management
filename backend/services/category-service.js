'use strict';

const db = require('../models');

class CategoryService {

  async getAllCategories() {
    var categories = [];
    categories = await db.category.findAll();
    var categroriesDtos = categories.map(category => {
      return {
        id: category.id,
        name: category.name,
      };
    });
    return categroriesDtos;
  }
}

module.exports = new CategoryService();
