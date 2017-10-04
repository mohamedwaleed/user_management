module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.sequelize.query("insert into `group`(name, category_id) values ('group1', 1)")
    .then(()=>{
      queryInterface.sequelize.query("insert into `group`(name, category_id) values ('group2', 2)")
      .then(()=>{
         done();
      });
    });

  },

  down: function(queryInterface, Sequelize) {

  }
}
