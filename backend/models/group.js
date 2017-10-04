module.exports = function(sequelize, DataTypes) {
    const Group = sequelize.define('group', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            name: {
               type: DataTypes.STRING(50),
               allowNull: false
            }
    }, {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false
    });

    Group.associate = function(models) {
      Group.belongsTo(models.category,{foreignKey: 'category_id'});
      Group.belongsToMany(models.user, {through: 'group_user',foreignKey: 'group_id',timestamps: false, onDelete: 'cascade', onUpdate: 'cascade'} );
    }
    return Group;
}
