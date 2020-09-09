const Project = require('../models/Project')

module.exports = {
  index: (req, res) => {
    Project.find({})
      .then(projects=> {
        res.json(projects)
      })
  }
}
