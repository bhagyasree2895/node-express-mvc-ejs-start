// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')

// require each data file

const bankorgs = require('../data/bankorgs.json')
const categorys = require('../data/categorys.json')
const accounts = require('../data/accounts.json')
const transactions = require('../data/transactions.json')

// inject the app to seed the data

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  // bankorgs don't depend on anything else...................

  db.bankorgs = new Datastore()
  db.bankorgs.loadDatabase()

  // insert the sample data into our data store
  db.bankorgs.insert(bankorgs)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.bankorgs = db.bankorgs.find(bankorgs)
  LOG.debug(`${app.locals.bankorgs.query.length} bankorgs seeded`)

  // categorys don't depend on anything else .....................

  db.categorys = new Datastore()
  db.categorys.loadDatabase()

  // insert the sample data into our data store
  db.categorys.insert(categorys)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.categorys = db.categorys.find(categorys)
  LOG.debug(`${app.locals.categorys.query.length} categorys seeded`)

  // accounts need a bankorg beforehand .................................

  db.accounts = new Datastore()
  db.accounts.loadDatabase()

  // insert the sample data into our data store
  db.accounts.insert(accounts)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.accounts = db.accounts.find(accounts)
  LOG.debug(`${app.locals.accounts.query.length} accounts seeded`)

  // Each account Line Item needs a category and an account beforehand ...................

  db.transactions = new Datastore()
  db.transactions.loadDatabase()

  // insert the sample data into our data store
  db.transactions.insert(transactions)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.transactions = db.transactions.find(transactions)
  LOG.debug(`${app.locals.transactions.query.length} transactions seeded`)

}
