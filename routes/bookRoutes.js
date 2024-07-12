const express = require('express');
const { addBook, getBooks } = require('../controllers/bookController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/add', auth, addBook);
router.get('/', auth, getBooks);

module.exports = router;
