module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.createTable('category',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
           type: Sequelize.STRING(50),
           allowNull: false
        }
    },
    {
        engine: 'InnoDB'
    }
    ).then(()=>{
             done();
         });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('category')
  }
}
