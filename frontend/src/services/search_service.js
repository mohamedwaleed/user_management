'use strict';

class SearchService {

  parse(query) {
    // groups:[id=1 and name=group1] , users: [id=2]
    var searchTerms = query.split(',');
    var parsedQuery = {};
    var existingKeys = {};
    for(var i = 0 ; i < searchTerms.length; i ++ ) {
      var keyValueEntity = searchTerms[i].trim().split(':');
      var keyEntity = keyValueEntity[0].trim();
      var valueEntity = keyValueEntity[1].trim().substring(1, keyValueEntity[1].trim().length - 1);
      console.log(valueEntity);
      if(existingKeys[keyEntity]) {
        throw new Error('Search entity already exists');
      }
      parsedQuery[keyEntity] = {};
      var searchFields = valueEntity.split('and');
      console.log(searchFields);
      var parsedSearchFields = searchFields.map((keyValueField) => {
        // console.log(keyValueField);
        var keyField = keyValueField.split('=')[0].trim();
        var valueField = keyValueField.split('=')[1].trim();
        var returnedObject = {};
        returnedObject[keyField] = valueField;
        return returnedObject;
      });
      for(var j = 0 ; j < parsedSearchFields.length ; j ++ ) {
        var keys = Object.keys(parsedSearchFields[j]);
        for(var k = 0 ; k < keys.length ; k ++ ) {
          parsedQuery[keyEntity][keys[k]] = parsedSearchFields[j][keys[k]];
        }
      }
    }
    return parsedQuery;
  }
}

export default SearchService;
