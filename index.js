require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./server/router')

const corsOptions = {
  origin: ['https://absurdlyeloquent.github.io', '::ffff:10.35.250.120:3000'],
  optionSuccessStatus: 200
}

const app = express();
app.use(cors(corsOptions))

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
