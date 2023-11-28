// server/controllers/bookController.js
const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAll((err, books) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching books.' });
      }
      res.json(books);
    });
  },

  getBookById: (req, res) => {
    const bookId = req.params.id;
    Book.getById(bookId, (err, book) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching book from the database.' });
      }
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    });
  },

  createBook: (req, res) => {
    const newBook = req.body;
    Book.create(newBook, (err, createdBook) => {
      if (err) {
        return res.status(500).json({ error: 'Error adding book to the database.' });
      }
      res.status(201).json(createdBook);
    });
  },

  updateBook: (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;
    Book.update(bookId, updatedBook, (err, updated) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating book in the database.' });
      }
      if (!updated) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(updated);
    });
  },

  deleteBook: (req, res) => {
    const bookId = req.params.id;
    Book.delete(bookId, (err, deletedBook) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting book from the database.' });
      }
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(deletedBook);
    });
  },
};

module.exports = bookController;