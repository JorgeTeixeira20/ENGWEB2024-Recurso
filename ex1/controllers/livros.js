const Livro = require('../models/livros');

// GET /books/genres
exports.getGenres = async (req, res) => {
  try {
    const books = await Livro.find({});
    const genres = new Set();
    books.forEach(book => {
      book.genres.forEach(genre => {
        genres.add(genre);
      });
    });
    res.json(Array.from(genres).sort());
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET /books/characters
exports.getCharacters = async (req, res) => {
  try {
    const books = await Livro.find({});
    const characters = new Set();
    books.forEach(book => {
      book.characters.forEach(character => {
        characters.add(character);
      });
    });
    res.json(Array.from(characters).sort());
  } catch (err) {
    res.status(500).send(err);
  }
};

// Outras funções do controlador
exports.getBooks = async (req, res) => {
  try {
    const books = await Livro.find({});
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Livro.findById(req.params.id);
    if (!book) res.status(404).send("Livro não encontrado");
    else res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBooksByCharacter = async (req, res) => {
  try {
    const character = req.query.character;
    const books = await Livro.find({ characters: character });
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBooksByGenre = async (req, res) => {
  try {
    const genre = req.query.genre;
    const books = await Livro.find({ genres: genre });
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new Livro(req.body);
    const book = await newBook.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) res.status(404).send("Livro não encontrado");
    else res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Livro.findByIdAndDelete(req.params.id);
    if (!book) res.status(404).send("Livro não encontrado");
    else res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};