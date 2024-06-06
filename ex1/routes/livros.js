const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livros');

// Rota para listar todos os gêneros
router.get('/genres', livrosController.getGenres);

// Rota para listar todos os personagens
router.get('/characters', livrosController.getCharacters);

// Rota para listar todos os livros
router.get('/', livrosController.getBooks);

// Rota para obter livro por ID
router.get('/:id', livrosController.getBookById);

// Rota para listar livros por personagem
router.get('/', livrosController.getBooksByCharacter);

// Rota para listar livros por gênero
router.get('/', livrosController.getBooksByGenre);

// Rota para criar um novo livro
router.post('/', livrosController.createBook);

// Rota para atualizar um livro por ID
router.put('/:id', livrosController.updateBook);

// Rota para excluir um livro por ID
router.delete('/:id', livrosController.deleteBook);

module.exports = router;
