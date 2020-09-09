require('dotenv').config()
const express = require('express')
const router = require('./server/router')

const app = express();
app.use(express.json())

app.use(router)

let server = app.listen(3000)

server.on('listening', ()=> {
  console.log('🤔 Server ready on port: 3000')
})

server.on('error', (err)=> {
  console.error(`😵 Server error!\n${err}`)
})
