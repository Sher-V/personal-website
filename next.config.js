const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n,
    env: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
}
