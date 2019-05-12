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

INSERT INTO emails (id, email) VALUES (1, "foo@bar");
INSERT INTO emails (id, email) VALUES (2, "foo@bar.com");
INSERT INTO emails (id, email) VALUES (3, "fizz@buzz");


DROP TABLE IF EXISTS contacts_emails;
CREATE TABLE contacts_emails (
  contact_id INT NOT NULL,
  email_id INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contact_id) REFERENCES contacts(id),
  FOREIGN KEY (email_id) REFERENCES emails(id),
  PRIMARY KEY (contact_id, email_id)
);

INSERT INTO contacts_emails (contact_id, email_id) VALUES (2, 1);
INSERT INTO contacts_emails (contact_id, email_id) VALUES (2, 2);
INSERT INTO contacts_emails (contact_id, email_id) VALUES (1, 3);
