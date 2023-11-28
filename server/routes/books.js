const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       '200':
 *         description: A successful response with the list of books.
 */
router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;