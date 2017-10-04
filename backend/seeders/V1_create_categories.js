module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.sequelize.query("insert into category(name) values ('sports')")
    .then(()=>{
      queryInterface.sequelize.query("insert into category(name) values ('social')")
      .then(()=>{
         done();
      });
    });

  },

  down: function(queryInterface, Sequelize) {

  }
}
