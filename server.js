const express = require('express')
const server = express()
const router = require('./routes/routes')
const PORT = process.env.PORT || 3000

server.set('view engine', 'ejs')

server.use('/', router)
server.listen(PORT, ()=> {
    console.log(`My Avatar! Port: ${PORT}`)
})

