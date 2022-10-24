const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/error')
const port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/words', require('./routes/wordRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}, ${process.env.PORT}`))