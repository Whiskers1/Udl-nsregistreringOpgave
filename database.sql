-- --------------------------------------------------------
-- Vært:                         127.0.0.1
-- Server-version:               10.5.8-MariaDB - mariadb.org binary distribution
-- ServerOS:                     Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for app
DROP DATABASE IF EXISTS `app`;
CREATE DATABASE IF NOT EXISTS `app` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `app`;

-- Dumping structure for tabel app.items
DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ComputerNr` varchar(50) NOT NULL,
  `Fabrikat` varchar(50) DEFAULT NULL,
  `Model` varchar(50) DEFAULT NULL,
  `Mus` varchar(50) DEFAULT 'nej',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ComputerNr` (`ComputerNr`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for tabel app.lendings
DROP TABLE IF EXISTS `lendings`;
CREATE TABLE IF NOT EXISTS `lendings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ElevNr` int(11) NOT NULL,
  `ComputerNr` int(11) NOT NULL,
  `Udlånsdato` date DEFAULT NULL,
  `Udløbsdato` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__users` (`ElevNr`),
  KEY `FK__items` (`ComputerNr`),
  CONSTRAINT `FK__items` FOREIGN KEY (`ComputerNr`) REFERENCES `items` (`id`),
  CONSTRAINT `FK__users` FOREIGN KEY (`ElevNr`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for tabel app.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ElevNr` varchar(50) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Adresse` varchar(50) DEFAULT NULL,
  `By` varchar(50) DEFAULT NULL,
  `PostNr` varchar(50) DEFAULT NULL,
  `CprNr` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `StamKlasse` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ElevNr` (`ElevNr`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
