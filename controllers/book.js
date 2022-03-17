const Book = require('../models/book')

//Afficher tous les livre

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
  const newBook = new Book(book)
  newBook.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.redirect('/books')
  })
}


//Details
function getBookDetails(req, res) {
  const id = req.params.id
  Book.findByPk(id)
  .then(function(data) {
      res.render("book", { title: data.title,
      book:data })
  })
  //en cas d'erreur
  .catch(function (err) {
      res.status(500).send( { message: err.message})
  })
}

//modification Book




module.exports = { getAllBooks, createBook, getBookDetails }