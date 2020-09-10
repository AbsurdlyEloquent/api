const Project = require('../models/Project')

module.exports = {
  index: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.find({})
      .then(projects=> {
        res.json(projects)
      })
  },
  byProp: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    let name = req.query.name
    let lang = req.query.lang
    if (name) {
      Project.find({name: name})
      .then(project=> res.json(project))
    } else if (lang) {
      Project.find({language: lang})
      .then(projects=> res.json(projects))
    }
  },
  postRepo: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.create(req.params)
    .then(project=> res.json(project))
  }
}
