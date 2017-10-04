'use strict';

const db = require('../models');

class SearchService {

  async search(query) {
    if(typeof query === 'object') {
      // advanced search
      var keys = Object.keys(query);
      for(var i = 0 ; i < keys.length ; i ++ ) {
        if(!db[keys[i]]){
          throw new Error(`Entity ${keys[i]} not exists`);
        }
      }
      var searchResult = {};
      for(var i = 0 ; i < keys.length ; i ++ ) {
        var result = await db[keys[i]].findAll({where:query[keys[i]]});
        searchResult[keys[i]] = result;
      }
      return searchResult;
    }else {
        // basic search
        var users = await db.user.findAll({where: {$or: {email: {$like: `%${query}%`}, first_name: {$like: `%${query}%`}, last_name: {$like: `%${query}%`}, gender: {$like: `%${query}%`}}}});
        var groups = await db.group.findAll({where:{name: {$like: `%${query}%`}}});
        var categories = await db.category.findAll({where:{name: {$like: `%${query}%`}}});
        return {
          user: users,
          group: groups,
          category: categories
        };
    }
  }
}

module.exports = new SearchService();
