var connection = require("./connection.js");

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected on: " + connection.threadId);
});

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (name, cb) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)", [name], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (id, cb) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function (err, result) {
            if(err) throw err;
        });
    }
};

module.exports = orm;