CREATE SCHEMA `baggu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci ;





CREATE TABLE `baggu`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `avatar` VARCHAR(50) NULL,
  `username` VARCHAR(50) NULL,
  `name` VARCHAR(50) NULL,
  `surname` VARCHAR(50) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  `category` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));