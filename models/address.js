'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});

  Address.associate = function(models) {
    Address.belongsTo(models.User,{
      as: 'user', foreignKey: 'userId'   // address belong to user 
    })
  }

  return Address;
};
