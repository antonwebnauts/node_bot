const ENV_LOCAL = 'local';
const ENV_PROD = 'prod';

class Configuration {
    static get ENV_LOCAL() {
        return ENV_LOCAL;
    }
    static get ENV_PROD() {
        return ENV_PROD;
    }
}

module.exports = Configuration