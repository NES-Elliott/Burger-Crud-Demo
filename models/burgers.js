'use strict'
module.exports = function(sequelize, DataTypes) {
    const burgers = sequelize.define('burgers', {
        burger_name: DataTypes.STRING,
        devoured: Datatypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                // association definitions here
            }
        }
    })
    return burgers
}