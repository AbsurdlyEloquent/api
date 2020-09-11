const Project = require('../models/Project')

module.exports = {
  index: (req, res)=> {
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
    } else {
      Project.find()
        .then(projects=> res.json(projects))
        .catch(err=> console.error(err))
    }
  },
  create: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.create(req.body)
      .then(project=> res.json(project))
      .catch(err=> console.error(err))
  },
  read: (req, res)=> {
    Project.findById(req.params.id)
    .then(project=> res.json(project))
    .catch(err=> console.error(err))
  },
  update: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.findOneAndUpdate({ _id:req.params.id }, req.body)
      .then(project=> res.json(project))
  },
  delete: (req, res)=> {
    console.log(`📨Received ${req.method} request at path: "${req.route.path}"🤝`)
    Project.findOneAndDelete({ _id:req.params.id })
      .then(project=> res.json(project))
  }
}
