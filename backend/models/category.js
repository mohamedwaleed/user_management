module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define('category', {
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

    Category.associate = function(models) {

    }
    return Category;
}
