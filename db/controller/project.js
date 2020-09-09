const Project = require('../models/Project')

module.exports = {
  index: (req, res)=> {
    Project.find({})
      .then(projects=> {
        res.json(projects)
      })
  },
  byName: (req, res)=> {
    let name = req.query.name
    let lang = req.query.lang
    if (name) {
      Project.find({name: name})
      .then(project=> res.json(project))
    } else if (lang) {
      Project.find({language: lang})
      .then(projects=> res.json(projects))
    }
  }
}
