module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.createTable('user',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        first_name: {
           type: Sequelize.STRING(50),
           allowNull: true
        },
        last_name: {
           type: Sequelize.STRING(50),
           allowNull: true
        },
        gender: {
           type: Sequelize.STRING,
           allowNull: true
        },
        email: {
           type: Sequelize.STRING(50),
           allowNull: true,
           unique: true
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
    queryInterface.dropTable('user')
  }
}
