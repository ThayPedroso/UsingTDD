const routes = require('express').Router()
const authMiddleware = require('./app/middlewares/auth')

const { User } = require('./app/models')
const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})

// Test sqlite insert user
// User.create({ name: 'Thayla', email: 'thayla.pa@hotmail.com', password_hash: '45478987' })

module.exports = routes