/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 * @author Venkatesh Kunduru
 *
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  LOG.debug('Request to /')
  res.render('index.ejs', { title: 'Express App' })
})

// Defer path requests to a particular controller
router.use('/about', require('../controllers/about.js'))
router.use('/bankorg', require('../controllers/bankorg.js'))
router.use('/account', require('../controllers/account.js'))
router.use('/category', require('../controllers/category.js'))
router.use('/transaction', require('../controllers/transaction.js'))
// router.use('/puppy', require('../controllers/puppy.js'))

LOG.debug('END routing')
module.exports = router
