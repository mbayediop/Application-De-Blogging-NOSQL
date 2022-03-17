const express = require('express')

const router = express.Router()

const book = require('../controllers/book')

router.get('/', book.getAllBooks)
router.post('/', book.createBook)
router.get('/:id/details', book.getBookDetails)


module.exports = router