const {User} = require('../models/user.js')

class MainBotController {
    input = async (req, res, next) => {
        
        let users = await User.findAll()
        res.json({
            status: users
        })
    }


}

module.exports = new MainBotController()