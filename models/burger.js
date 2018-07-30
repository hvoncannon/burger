var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    eat: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res);
        });
    },
    new: function(name, cb) {
        orm.insertOne(name, cb)
    }
};

module.exports = burger;