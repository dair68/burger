var orm = require("../config/orm.js");

var burger = {
    read: function() {
        orm.selectAll("burger");
    },
    create: function(columns, values) {
        orm.insertOne("burger", columns, values);
    },
    update: function(valuesObj, condition) {
        orm.updateOne("burger",valuesObj, condition);
    }
};

module.exports = burger;