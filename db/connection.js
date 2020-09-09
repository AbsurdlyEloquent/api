const mongoose = require('mongoose')

let mongoURI = process.env.DB_URL
console.log(mongoURI)

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(instance=> console.log(`✨Connected to database: ${instance.connections[0].name}✨`))
  .catch(err=> console.error(`🥺 Database error!\n${err}`))

module.exports = mongoose;
