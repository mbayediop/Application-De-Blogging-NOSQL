const Book = require('../models/book')

function getAllBooks(req, res) {
  Book.find()
    .then(function (data) {
      res.render('books', { title: 'Mes lectures en 2022', books: data })
    })
    .catch(function (err) {
      res.status(500).send({ message: err.message })
    })
}

//ajouter un book
function createBook(req, res) {
  if (!req.body.title || !req.body.author || !req.body.resume) {
    res.status(400).send('Vous devez remplir les données')
  }
  const book = {
    title: req.body.title,
    author: req.body.author,
    resume: req.body.resume,
  }
  
  const newBook = new Book(title, author, resume)
  newBook.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.redirect('/books')
  })
}

module.exports = { getAllBooks, createBook }