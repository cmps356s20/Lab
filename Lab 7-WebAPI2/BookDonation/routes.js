const bookService = require('./services/BookService')
const express = require('express')
const router = express.Router();

router.get('/books/summary' , bookService.getBookSummary)

module.exports = router;