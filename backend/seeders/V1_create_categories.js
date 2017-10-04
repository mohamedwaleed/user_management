module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('category', [{
        name: 'Sports'
      },{
        name: 'Social'
      },{
        name: 'Politics'
      },{
        name: 'Art'
      },{
        name: 'Cinema'
      }], {});


  },

  down: function(queryInterface, Sequelize) {

  }
}
