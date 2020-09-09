const Project = require('../models/Project')

module.exports = {
  index: (req, res)=> {
    Project.find({})
      .then(projects=> {
        res.json(projects)
      })
  },
  byName: (req, res)=> {
    Project.find({name: req.params.name})
      .then(project=> {
        res.json(project)
      })
  },
  byLang: (req, res)=> {
    Project.find({language: req.params.lang})
      .then(projects=> {
        res.json(projects)
      })
  }
}
