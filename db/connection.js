const mongoose = require('mongoose')

let mongoURI = process.env.DB_URL

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(instance=> console.log(`✨Connected to database: ${instance.connections[0].name}✨`))
  .catch(err=> console.error(`🥺 Database error!\n${err}`))

module.exports = mongoose;
