CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(500), 
    devoured BOOLEAN,
    PRIMARY KEY(id)
);