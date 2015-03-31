#Nodejs or io.js template for wiring up new projects.  

Includes many tools to get going on a new project quickly.  It is ready to go with MongoDB or MS-SQL server.  

###Includes

- bower (for client side installations).  Installs to public directory.
  - .bowerrc configuration file
- npm (for server side installations)
- express MV* framework
- Jade view engine
- package.json configuration file for npm
- karma testing framework
  - [Global install of Karma recommended](https://karma-runner.github.io/0.12/intro/installation.html)
  - Uses chrome and firefox
- [msnodesql](https://www.npmjs.com/package/msnodesql)
  - [Because this dependency is tough to install](http://stackoverflow.com/questions/19661811/unable-to-download-msnodesql-0-2-1-v0-10-x64-msi)
  - Only required if you need MS-SQL

##Other Dependencies

- [node.js](https://nodejs.org/) OR [io.js](https://iojs.org/en/index.html) for ES6
- [gulp](http://gulpjs.com/)
- [mongodb](https://www.mongodb.org/)

####Framework

- controller
- dataService

##Setup

- npm install
- Launch web server: node app
  - app.js is the entry point
- gulp (execute at command line to start the website)
- http://localhost:3333/ => This url tests that the site is up
- http://localhost:3333/api/sql => This url tests SQL calls.
  - Be sure to set app.js with a connection string and query that exists in your database.
    - E.G. `"SELECT TOP 10 * FROM Customers"`
- Test MongoDB (after launching website at least 1x):  http://localhost:28017/theBoard/notes/

####MongoDB (optional)
- Install MongoDB
- change directory to installation path (all the way to /bin)
- md data
- mongod -dbpath data --httpinterface --rest (./data on Mac) (starts service)
 - http://localhost:28017/ => Access MongoDB via HTTP
 - local DB is akin to master in SQL

###ToDo
