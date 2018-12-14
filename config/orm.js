var connection = require("./connection");

//reads all the data in the burgers table
var orm = {
    selectAll: function(table) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table] ,function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res);
        });
    },
    insertOne: function(table, columns, values) {
        var query = "INSERT INTO ??(??) VALUES(?)";
        var parameters = [
            table,
            columns,
            values
        ];
        connection.query(query, parameters, function(err, res) {
            if(err) {
                throw err;
            }
            console.log(res);
        });
    },
    updateOne: function(table, valuesObj, condition) {
        var query = "UPDATE ?? SET ? WHERE ?";
        var parameters = [
            table,
            valuesObj,
            condition
        ];
        connection.query(query, parameters, function(err, res) {
            if(err) {
                throw err;
            }
            console.log(res);
        });
    }
}

module.exports = orm;