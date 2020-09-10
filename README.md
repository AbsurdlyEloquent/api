# Projects API
A simple API written in Node using Express and Mongodb

## Request:

### GET:

Path: '/' - returns all the projects in the Database
Path: '/q?' - returns a search based on name or language
ex: `/q?name=Game-of-War` **This is case sensitive**

### POST:

Path: '/:name/p?' - Posts a project with a given name and given props
ex: `/New-Project/p?url=github.com&language=JavaScript`

### PUT:

Path: '/:name/p?' - Finds a project with a given name and replaces the props it's given
ex: `/apod-react/p?language=react`

### DELETE:
Path: '/:name' - Finds a project with a given name and removes it. It returns the project that was removed
