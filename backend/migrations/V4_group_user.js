
module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.createTable('group_user',{
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'user',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        group_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'group',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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
    queryInterface.dropTable('group_user')
  }
}
