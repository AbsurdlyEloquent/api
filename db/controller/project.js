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
      Project.find({name: name, language: lang})
        .then(project=> res.json(project))
        .catch(err=> console.error(err))
    } else if (lang) {
      Project.find({language: lang})
        .then(projects=> res.json(projects))
        .catch(err=> console.error(err))
    } else {
      Project.find()
        .then(projects=> res.json(projects))
        .catch(err=> console.error(err))
    }
  },
  postRepo: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.create(req.body)
      .then(project=> res.json(project))
      .catch(err=> console.error(err))
  },
  putRepo: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.findOneAndUpdate(req.params, req.query)
      .then(project=> res.json(project))
  },
  delete: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.findOneAndDelete(req.params)
      .then(project=> res.json(project))
  }
}
