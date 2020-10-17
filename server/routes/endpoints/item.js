const itemEndPoints = require('express').Router()
const ItemController = require('../../controllers/ItemController')
const authenticate = require('../../middleware/authentication')

itemEndPoints
    .post('/create', authenticate ,ItemController.createItem)    

module.exports = itemEndPoints