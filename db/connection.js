const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/projects', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(instance=> console.log(`✨Connected to database: ${instance.connections[0].name}✨`))
  .catch(err=> console.error(`🥺\n${err}`))

module.exports = mongoose;
