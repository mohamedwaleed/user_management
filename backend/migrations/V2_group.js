module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.createTable('group',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
           type: Sequelize.STRING(50),
           allowNull: true
        },
        category_id: {
          type:  Sequelize.INTEGER,
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
    queryInterface.dropTable('group')
  }
}
