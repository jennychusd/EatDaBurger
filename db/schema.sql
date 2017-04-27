### Schema

CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`burger` varchar(144) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
