const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = new Book({
            title,
            author,
            user: req.user.id
        });

        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({ user: req.user.id });
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
