const { createLogger, format, transports } = require('winston');
const moment = require('moment');

module.exports = createLogger({
    transports: [
        new transports.Console({
            level: 'warn'
        }),
        new transports.File({
            filename: __dirname + '/logs/defi-' +  moment().format('YYYY-MM-DD') + '.log',
            format:format.combine(
                format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )}),

    ],
    // exceptionHandlers: [
    //     new transports.File({ filename: '/project/apidefi.staj.fun/logs/exceptions.log' })
    // ]

});
