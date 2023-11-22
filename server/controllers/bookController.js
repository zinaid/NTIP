const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAll();
  }
};

module.exports = bookController;