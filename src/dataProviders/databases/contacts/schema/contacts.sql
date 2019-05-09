DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL
);

INSERT INTO users (id, username) VALUES (1, "user1");

DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) DEFAULT "",
  description VARCHAR(200) DEFAULT "",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL
);

INSERT INTO contacts (id, first_name, last_name) VALUES (1, "Fizz", "Buzz");
INSERT INTO contacts (id, first_name, last_name) VALUES (2, "Foo", "Bar");

DROP TABLE IF EXISTS emails;

CREATE TABLE emails (
  id INT PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL
);
