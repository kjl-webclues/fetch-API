const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/bookDB'

const app = express()

mongoose.connect(url, { useNewUrlParser: true }) // {useNewUrlParser=true for avoid warning}
const con = mongoose.connection

con.on('open',  () => {
    console.log('connected...')
})

app.use(express.json())

const bookRouter = require('./routes/books')
app.use('/books', bookRouter)

app.listen(3000,  () => {
    console.log("server startted")
})


