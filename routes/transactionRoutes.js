const express = require('express');
const { createTransaction, getTransactions } = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.post('/', createTransaction);
router.get('/', getTransactions);

module.exports = router;