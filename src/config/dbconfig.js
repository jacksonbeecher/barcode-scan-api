const config = {
    server: process.env.DB_SERV,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    options:{
        trustedconnection: true,
        enabledArithAbort: true,
        instancename: process.env.DB_SERV,
        trustServerCertificate: true,
    },
    pool:{
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000,
    }
}

module.exports = config;