module.exports = function(sequelize, DataTypes) {
    const GroupUsers = sequelize.define('group_user', {

    }, {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false
    });

    GroupUsers.associate = function(models) {

    }
    return GroupUsers;
}
