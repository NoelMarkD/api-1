const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
let count;

fetch('https://api.sampleapis.com/avatar/characters')
    .then(res => res.json())
    .then(data => {
        count = data.length
    })

// localhost:3000/names
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/avatar/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/avatar', {
                title: 'A Lot of avatars',
                name: 'A Lot of avatars',
                data
            })
        })
})


// localhost:3000/jokes/:id 
router.get('/:id', (req, res)=> {
    const id = req.params.id 
    const URL = `https://api.sampleapis.com/avatar/characters${id}`

    fetch(URL)
        .then(res => res.json()) 
        .then(data => {
            res.render('pages/single-avatar', {
                title: `${data.setup}`,
                name: `${data.setup}`,
                data,
                count
            })
        })
})

module.exports = router