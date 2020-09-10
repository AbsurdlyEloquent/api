const Project = require('../models/Project')

module.exports = {
  index: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.find({})
      .then(projects=> res.json(projects))
      .catch(err=> console.error(err))
  },
  byProp: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    let name = req.query.name
    let lang = req.query.lang
    if (name) {
      Project.find({name: name})
        .then(project=> res.json(project))
        .catch(err=> console.error(err))
    } else if (lang) {
      Project.find({language: lang})
        .then(projects=> res.json(projects))
        .catch(err=> console.error(err))
    }
  },
  postRepo: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    req.query.name = req.params.name
    Project.create(req.query)
      .then(project=> res.json(project))
      .catch(err=> console.error(err))
  }
}
