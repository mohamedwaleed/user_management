module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('group_user', [{
        user_id: 1,
        group_id: 1
      },
    {
      user_id: 1,
      group_id: 2
    },
    {
      user_id: 2,
      group_id: 1
    },
    {
      user_id: 2,
      group_id: 2
    },
    {
      user_id: 3,
      group_id: 1
    },
    {
      user_id: 4,
      group_id: 1
    },
    {
      user_id: 5,
      group_id: 3
    },
    {
      user_id: 6,
      group_id: 4
    }], {});
  },

  down: function(queryInterface, Sequelize) {

  }
}
