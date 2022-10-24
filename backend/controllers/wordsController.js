const asyncHandler = require('express-async-handler')

const wordlist = require('../models/wordlistModel')

/**
 * *Gets all word lists from db
 * *GET /api/words
 * @param {*} req 
 * @param {*} res 
 */
const getLists = asyncHandler(async (req, res) => {
    const lists = await wordlist.find()

    res.status(200).json(lists)
})

/**
 * *Inserts a new array of words
 * *POST /api/words
 * @param {*} req 
 * @param {*} res 
 */
 const insertList = asyncHandler(async (req, res) => {
    if (!req.body.words) {
        res.status(400)
        throw new Error('please send a word list')
    }

    const list = await wordlist.create({
        words: req.body.words
    })

    res.status(200).json(list)
})

/**
 * *Updates a selected list of words
 * *PUT /api/words/:id
 * @param {*} req 
 * @param {*} res 
 */
 const updateList = asyncHandler(async (req, res) => {
    const list = await wordlist.findById(req.params.id)

    if (!list) {
        res.status(400)
        throw new Error('list not found')
    }

    const updatedList = await wordlist.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedList)
})

/**
 * *Deletes a selected list of words
 * *DELETE /api/words/:id
 * @param {*} req 
 * @param {*} res 
 */
 const deleteList = asyncHandler(async (req, res) => {
    const list = await wordlist.findById(req.params.id)

    if (!list) {
        res.status(400)
        throw new Error('list not found')
    }

    await list.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getLists,
    insertList,
    updateList,
    deleteList
}