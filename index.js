require('dotenv').config()
const express = require('express')
const router = require('./routes/mainRouter')
const sequelize = require('./db')
// const cron = require('./cron/CronKernel')
const cors = require('cors')
const logger = require('./utils/logger')
require('express-async-errors');
const configuration = require('./configuration')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router)


const start = async () => {
    try {
        console.log('Server started')
        await sequelize.authenticate()
        // await sequelize.sync({ alter: true })
        app.listen(PORT, () => console.log('Server started'))
    } catch (e) {
        console.log(e)
    }
}
// cron.startCron()
//
start()

/**
 * catch 404 and forward to error handler
 */

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
 * error handlers - these take err object.
  */

if (process.env.ENVIRONMENT === configuration.ENV_LOCAL) {
    app.use(function (err, req, res, next) {
        logger.error(JSON.stringify(err.message + err.stack))
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err.stack
        });
    });
} else {
    app.use(function (err, req, res, next) {
        logger.error(JSON.stringify(err.message + err.stack))
        res.status(err.status || 500);
        res.json({
            message: 'INTERNAL SERVER ERROR',
        });
    });
}


