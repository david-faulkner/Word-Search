const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

/**
 * Register new user
 * @param {*} req 
 * @param {*} res 
 */
const registerUser = asyncHandler(async (req, res) => {
    const { name, password } = req.body

    if (!name || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({name})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

/**
 * Authenticate
 * @param {*} req 
 * @param {*} res 
 */
 const loginUser = asyncHandler(async (req, res) => {
    const { name, password } = req.body

    if (!name || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    const user = await User.findOne({name})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

/**
 * Get user data
 * @param {*} req 
 * @param {*} res 
 */
 const getMe = asyncHandler(async (req, res) => {
    const {_id, name} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name
    })
})

/**
 * Generate jwt
 */
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}