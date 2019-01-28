'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   
      return queryInterface.bulkInsert('burgers', [{
        burger_name: 'Fattie Burger',
        devoured: false
      },
      {  burger_name: 'Veggie Burger',
      devoured: false
      },
      {  burger_name: 'Mushroom Burger',
      devoured: false
      }], {});

  },

  down: function (queryInterface, Sequelize) {
   
      return queryInterface.bulkDelete('burgers', null, {});
  }
};
