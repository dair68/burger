var connection = require("./connection");

//reads all the data in the burgers table
var ORM = {
    selectAll: function() {
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }

            console.log(res);
        });
    },
    insertOne: function(name, devoured) {
        var query = "INSERT INTO burgers(burger_name, devoured) VALUES(?, ?)";
        var parameters = {
            burger_name: name,
            devoured: devoured
        }
        connection.query(query, parameters, function(err, res) {
            if(err) {
                throw err;
            }

            console.log(res);
        });
    },
    updateOne: function(id, name, devoured) {
        var query = "UPDATE burgers SET burger_name=?, devoured=? WHERE id=?";
        var parameters = {
            burger_name: name,
            devoured: devoured,
            id: id
        };
        connection.query(query, parameters, function(err, res) {
            if(err) {
                throw err;
            }

            console.log(res);
        });
    }
}

module.exports = ORM;