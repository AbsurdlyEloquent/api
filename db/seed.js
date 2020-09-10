const Project = require('./models/Project')
const { request } = require('@octokit/request')

getData()
async function getData() {
  try {
    let res = await request("GET https://api.github.com/users/AbsurdlyEloquent/repos")
    let data = res.data
    let filtered = filter(data)
    seed(filtered)
  }
  catch (err) {
    console.error(err)
  }
}

function filter(data) {
  return data.map(item=> {
    return {
      name: item.owner.name,
      fullName: item.full_name,
      private: item.private,
      owner: {
        user: item.login,
        avatar_url: item.owner.avatar_url,
        url: item.owner.html_url
      },
      url: item.html_url,
      description: item.description,
      homepage: item.homepage,
      language: item.language,
      framework: ""
    }
  })
}

function seed(data) {
  Project
    .deleteMany()
    .then(()=> Project.create(data))
    .then(()=> console.log(`Seeded successfully!`))
    .catch(err=> console.error(err))
}
