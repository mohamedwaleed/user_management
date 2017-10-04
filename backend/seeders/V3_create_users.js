module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('user', [{
        first_name: 'Mohamed',
        last_name: 'Waleed',
        email: 'mohamedwaleed2012@gmail.com',
        gender: 'male'
      },{
        first_name: 'ali',
        last_name: 'ali',
        email: 'ali@gmail.com',
        gender: 'male'
      },
      {
        first_name: 'eman',
        last_name: 'eman',
        email: 'eman@gmail.com',
        gender: 'female'
      },
      {
        first_name: 'Sally',
        last_name: 'pop',
        email: 'sally@gmail.com',
        gender: 'female'
      },
      {
        first_name: 'max',
        last_name: 'max',
        email: 'max@gmail.com',
        gender: 'male'
      },
      {
        first_name: 'Jaccob',
        last_name: 'Jaccob',
        email: 'Jaccob@gmail.com',
        gender: 'male'
      }], {});
  },

  down: function(queryInterface, Sequelize) {

  }
}
