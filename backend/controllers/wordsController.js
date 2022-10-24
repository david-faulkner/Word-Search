/**
 * Gets all word lists from db
 * GET /api/words
 * @param {*} req 
 * @param {*} res 
 */
const getLists = (req, res) => {
    res.status(200).json({
        'words': ['mary', 'had', 'a', 'little', 'lamb']
    })
}

/**
 * Inserts a new array of words
 * POST /api/words
 * @param {*} req 
 * @param {*} res 
 */
 const insertList = (req, res) => {
    res.status(200).json({
        'words': ['mary', 'had', 'a', 'little', 'lamb']
    })
}

/**
 * Updates a selected list of words
 * PUT /api/words/:id
 * @param {*} req 
 * @param {*} res 
 */
 const updateList = (req, res) => {
    res.status(200).json({
        'words': `updated: ${req.params.id}`
    })
}

/**
 * Deletes a selected list of words
 * DELETE /api/words/:id
 * @param {*} req 
 * @param {*} res 
 */
 const deleteList = (req, res) => {
    res.status(200).json({
        'words': `deleted: ${req.params.id}`
    })
}

module.exports = {
    getLists,
    insertList,
    updateList,
    deleteList
}