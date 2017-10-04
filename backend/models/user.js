module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('user', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            first_name: {
               type: DataTypes.STRING(50),
               allowNull: true
            },
            last_name: {
               type: DataTypes.STRING(50),
               allowNull: true
            },
            gender: {
               type: DataTypes.STRING,
               allowNull: true
            },
            email: {
               type: DataTypes.STRING(50),
               allowNull: false,
               unique: true
            }
    }, {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false
    });

    User.associate = function(models) {
        User.belongsToMany(models.group, {through: 'group_user',foreignKey: 'user_id',timestamps: false, onDelete: 'cascade', onUpdate: 'cascade'});
    }
    return User;
}
