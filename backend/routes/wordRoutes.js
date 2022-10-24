const express = require('express')
const router = express.Router()
const { getLists, insertList, updateList, deleteList } = require('../controllers/wordsController')

router.route('/').get(getLists).post(insertList)
router.route('/:id').delete(deleteList).put(updateList)

module.exports = router