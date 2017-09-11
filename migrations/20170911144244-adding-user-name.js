'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      queryInterface.addColumn(
        'Users',
        'username', {
          type: Sequelize.STRING
        }
      )

  },

  // this is fired when we do undo 
  down: function (queryInterface, Sequelize) {

      queryInterface.removeColumn(
        'Users',
        'username'
      )

  }
};
