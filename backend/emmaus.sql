DROP TABLE IF EXISTS `phone`;

CREATE TABLE `phone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `marque` varchar(100) NOT NULL,
  `os` varchar(100) Not NULL,
  `picture` varchar(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table `phone`
--
LOCK TABLES `phone` WRITE;

INSERT INTO
  `phone`
VALUES
  (1, "Iphone6", "Apple", "ios", "..."),
  (2, "Samsung A51", "Samsung", "androïd", "..."),
  (3, "Pixel 7a", "Google", "androïd", "...");

UNLOCK TABLES;

-- Création de la table "state"
CREATE TABLE `state` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `weighting` INT
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Insertion des données dans la table "state"
INSERT INTO
  `state` (id, name, weighting)
VALUES
  (1, 'DEEE', -100),
  (2, 'BLOQUE', -10),
  (3, 'RECONDITIONABLE', -5),
  (4, 'REPARABLE', -50),
  (5, 'RECONDITIONNE', 0);

-- Création de la table "memory"
CREATE TABLE `memory` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `parametreGo` INT,
  `points` INT
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Insertion des données dans la table "memory"
INSERT INTO
  `memory` (id, parametreGo, points)
VALUES
  (1, 16, 31),
  (2, 32, 45),
  (3, 64, 66),
  (4, 128, 100),
  (5, 256, 100),
  (6, 512, 100),
  (7, 1000, 100);

-- Création de la table "ram"
CREATE TABLE `ram` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `value` INT,
  `points2` INT
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Insertion des données dans la table "ram"
INSERT INTO
  `ram` (id, value, points2)
VALUES
  (1, 1, 30),
  (2, 2, 45),
  (3, 3, 54),
  (4, 4, 100),
  (5, 6, 100),
  (6, 8, 100),
  (7, 12, 100),
  (8, 16, 100);

--
-- Table structure for table `memory_state_ram`
--
DROP TABLE IF EXISTS `memory_state_ram`;

CREATE TABLE `memory_state_ram` (
  `memory_id` INT,
  `state_id` INT,
  `ram_id` INT,
  `phone_id` INT,
  `antutu` INT UNSIGNED NULL,
  CONSTRAINT `fk_memory` FOREIGN KEY (`memory_id`) REFERENCES `memory`(`id`),
  CONSTRAINT `fk_state` FOREIGN KEY (`state_id`) REFERENCES `state`(`id`),
  CONSTRAINT `fk_ram` FOREIGN KEY (`ram_id`) REFERENCES `ram`(`id`),
  CONSTRAINT `fk_phone` FOREIGN KEY (`phone_id`) REFERENCES `phone`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- --
-- -- Dumping data for table `memory_state_ram`
LOCK TABLES `memory_state_ram` WRITE;

INSERT INTO
  `memory_state_ram`
VALUES
  (1, 1, 1, 1, 250),
  (2, 2, 2, 2, 450),
  (3, 3, 3, 3, 650);

UNLOCK TABLES;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `user`
VALUES
  (1, "johndoe@gmail.com", "doe123");

UNLOCK TABLES;