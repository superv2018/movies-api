const express = require('express');
const router = express.Router();


//json data
const movieData = require('../data/movies.json')

router.get('/', (req, res) => {
    res.json(movieData)
})

router.get('/:genreId', (req, res) => {
    const id = req.params.genreId
    console.log(id)
    const data = movieData.moviesCategory.find(data => data.genreId === Number(id))
console.log(data)
    if (data) {
        res.json(data)
    } else {
        res.status(404).end()
    }
    
})

router.get('/:genreId/:')

module.exports = router;