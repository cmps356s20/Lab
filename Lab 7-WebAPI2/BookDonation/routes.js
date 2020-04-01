const bookService = require('./services/BookService')
const express = require('express')
const router = express.Router();

router.get('/books/summary' , bookService.getBookSummary)

router.route('/books')
    .get(bookService.getBooks)
    .post(bookService.addBook)

router.route('/books/:isbn')
    .put(bookService.updateBook)
    .delete(bookService.deleteBook)

module.exports = router;
