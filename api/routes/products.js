const express = require('express')
const router = express.Router();

// const Product = require('../models/Products')

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET'
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'POST'
    })
})

router.delete('/', (req, res) => {
    res.status(200).json({
        message: 'DELETE'
    })
})

router.put('/', (req, res) => {
    res.status(200).json({
        message: 'PUT'
    })
})
module.exports = router