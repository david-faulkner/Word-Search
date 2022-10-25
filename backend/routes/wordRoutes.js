const express = require('express')
const router = express.Router()
const { getLists, insertList, updateList, deleteList } = require('../controllers/wordsController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getLists).post(protect, insertList)
router.route('/:id').delete(protect, deleteList).put(protect, updateList)

module.exports = router