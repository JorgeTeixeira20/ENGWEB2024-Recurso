var express = require('express');
var router = express.Router();
var axios = require('axios');

const apiUrl = 'http://backend:17000/books';

// Rota principal
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get(apiUrl);
    const books = response.data;
    res.render('index', { title: 'Lista de Livros', books });
  } catch (error) {
    next(error);
  }
});

// Rota para um livro específico
router.get('/:id', async function(req, res, next) {
  try {
    const response = await axios.get(`${apiUrl}/${req.params.id}`);
    const book = response.data;
    res.render('book', { title: 'Detalhes do Livro', book });
  } catch (error) {
    next(error);
  }
});

// Rota para um autor específico
router.get('/authors/:idAutor', async function(req, res, next) {
  try {
    const response = await axios.get(apiUrl);
    const books = response.data.filter(book => book.author.includes(req.params.idAutor));
    const authorBooks = books.length;
    res.render('author', { title: 'Detalhes do Autor', books, idAutor: req.params.idAutor, authorBooks });
  } catch (error) {
    next(error);
  }
});

module.exports = router;