// server/models/bookModel.js
const db = require('../db/database');

class Book {
  static getAll(callback) {
    db.all('SELECT * FROM books', callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM books WHERE id = ?', [id], callback);
  }

  static create(book, callback) {
    const { title, author, description } = book;
    db.run('INSERT INTO books (title, author, description) VALUES (?, ?, ?)', [title, author, description], function (err) {
      callback(err, { id: this.lastID, title, author, description });
    });
  }

  static update(id, updatedBook, callback) {
    const { title, author, description } = updatedBook;
    db.run('UPDATE books SET title=?, author=?, description=? WHERE id=?', [title, author, description, id], function (err) {
      if (err) {
        return callback(err);
      }
      if (this.changes === 0) {
        // No rows were affected, meaning the book with the given ID was not found
        return callback(null, null);
      }
      // Book updated successfully
      callback(null, { id, title, author, description });
    });
  }

  static delete(id, callback) {
    db.get('SELECT * FROM books WHERE id = ?', [id], (err, book) => {
      if (err) {
        return callback(err);
      }
      if (!book) {
        // Book with the given ID not found
        return callback(null, null);
      }

      db.run('DELETE FROM books WHERE id = ?', [id], function (err) {
        if (err) {
          return callback(err);
        }
        // Book deleted successfully
        callback(null, { id, title: book.title, author: book.author, description: book.description });
      });
    });
  }
}

module.exports = Book;
