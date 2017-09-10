'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});


  User.associate = function(models) { // user can have many addresses 
    User.hasMany(models.Address,{ as :'addresses', foreignKey:'userId' })
  }


  return User;
};
