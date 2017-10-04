module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('group', [{
        name: 'Group1',
        category_id: 1
      },{
        name: 'Group2',
        category_id: 2
      },{
        name: 'Group3',
        category_id: 3
      },{
        name: 'Group4',
        category_id: 4
      },{
        name: 'Group5',
        category_id: 5
      },{
        name: 'Group6',
        category_id: 1
      },{
        name: 'Group7',
        category_id: 2
      }], {});
  },

  down: function(queryInterface, Sequelize) {

  }
}
