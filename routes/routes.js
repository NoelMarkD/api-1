const express = require('express')

const router = express.Router()

// static files
router.use(express.static('public'))

const avatarRoutes = require('./api/avatarRoutes')

router.use('/avatar', avatarRoutes)

// home route 
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'My Avatars Website!',
        name: 'Avatars'
    })
})

// error route 
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>You will find no avatar here!</h1>')
    }
})

module.exports = router