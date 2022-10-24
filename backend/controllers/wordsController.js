const asyncHandler = require('express-async-handler')

/**
 * *Gets all word lists from db
 * *GET /api/words
 * @param {*} req 
 * @param {*} res 
 */
const getLists = asyncHandler(async (req, res) => {
    res.status(200).json({
        'words': ['mary', 'had', 'a', 'little', 'lamb']
    })
})

/**
 * *Inserts a new array of words
 * *POST /api/words
 * @param {*} req 
 * @param {*} res 
 */
 const insertList = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text')
    }
    res.status(200).json({
        'words': ['mary', 'had', 'a', 'little', 'lamb']
    })
})

/**
 * *Updates a selected list of words
 * *PUT /api/words/:id
 * @param {*} req 
 * @param {*} res 
 */
 const updateList = asyncHandler(async (req, res) => {
    res.status(200).json({
        'words': `updated: ${req.params.id}`
    })
})

/**
 * *Deletes a selected list of words
 * *DELETE /api/words/:id
 * @param {*} req 
 * @param {*} res 
 */
 const deleteList = asyncHandler(async (req, res) => {
    res.status(200).json({
        'words': `deleted: ${req.params.id}`
    })
})

module.exports = {
    getLists,
    insertList,
    updateList,
    deleteList
}