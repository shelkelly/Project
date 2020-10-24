DROP DATABASE IF EXISTS top_booksDB;
CREATE database top_booksDB;

USE top_booksDB;

CREATE TABLE books (
id INT NOT NULL,
authors VARCHAR(100) NULL,
  original_publication_year INT NULL,
  original_title VARCHAR(100) NULL,
  title VARCHAR(100) NULL,
  language_code VARCHAR(25) NULL,
  average_rating DECIMAL(10,2) NULL,
  small_image_url VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM books;
