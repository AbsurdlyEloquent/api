require('dotenv').config()
const express = require('express')
const router = require('./server/router')

const app = express();
app.use(express.json())

app.use(router)

app.set('port', process.env.PORT || 8080)

let server = app.listen(app.get('port'))

server.on('listening', ()=> {
  console.log('🤔 Server ready on port: 3000')
})

server.on('error', (err)=> {
  console.error(`😵 Server error!\n${err}`)
})
