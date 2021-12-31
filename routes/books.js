const express = require('express')
const book = require('../models/book')
const router = express.Router()
const Book = require('../models/book')

//specify all the url using the handler,  async request
router.get('/', async(req, res) => {
    // res.send("Get Request")
    try {
        const books = await Book.find()
        res.send(books) // return in json formate
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => { //for getting 1 id
    try {
        const book = await Book.findById(req.params.id)
        res.send(book) // return in json formate
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req,res) => {
    const book = new Book({  //create object for storing data
        name: req.body.name,  //for getting data 
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const b1 = await book.save() // save the data
        res.json(b1) //send data to client 
    } catch (err) {
        res.send("Error")
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        book.sub = req.body.sub //change the data
        const b1 = await book.save()
        res.json(b1)
    } catch (err) {
        res.send('Error')
    }
})
    
 
module.exports = router