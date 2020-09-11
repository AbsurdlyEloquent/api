require('dotenv').config()
const express = require('express')
const router = require('./server/router')

const app = express();

app.use(express.json())

app.use('/projects', router)

app.get('/', (req, res)=> {
  res.redirect('/projects')
})

app.set('port', process.env.PORT || 8080)

let server = app.listen(app.get('port'))

server.on('listening', ()=> {
  console.log(`🤔 Server ready on port: ${app.get('port')}`)
})

server.on('error', (err)=> {
  console.error(`😵 Server error!\n${err}`)
})
