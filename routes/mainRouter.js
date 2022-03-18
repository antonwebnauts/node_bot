const Router = require('express')

const router = new Router()
const asyncHandler = require('express-async-handler')
const MainBotController = require('../controllers/mainBotController')

// router.use('/', mainRouter)
router.post('/bot', asyncHandler(MainBotController.input) )
router.get('/bot', asyncHandler(MainBotController.input) )


module.exports = router
