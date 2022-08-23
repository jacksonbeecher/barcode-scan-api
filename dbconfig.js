const set = require('./config')

const config = {
    server: set.DB_SERV,
    port: set.DB_PORT,
    user: set.DB_USER,
    password: set.DB_PASS,
    database: set.DB_NAME,
    options:{
        trustedconnection: true,
        enabledArithAbort: true,
        instancename: set.DB_SERV,
        trustServerCertificate: true,
    },

}

module.exports = config;