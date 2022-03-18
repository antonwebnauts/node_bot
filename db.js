const {Sequelize} = require('sequelize')
const { applyExtraSetup } = require('./extra-setup');


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect:'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

// We define all models according to their files.
// for (const modelDefiner of modelDefiners) {
//     modelDefiner(sequelize);
// }

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;