const {mysql} = require('../config/databaseConfig');
class PersonaQueries {
    
    static async getPersona(email) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT *
                FROM presona
                WHERE email = ?;
            `;

            mysql.query(sql, [email], (err, rows, fields) => {
                if (err) {
                    logger.error(`Query error: ${Utils.printErrorLog(err)}`);
                    return reject(new Error(err.message));
                }
                if (rows == undefined || rows == null) {
                    //logger.error(`null error: ${address}`);
                    return reject({
                        message: "undefined"
                    });
                } else {
                    return resolve(JSON.parse(JSON.stringify(rows)));
                }

            });
        });
    }

}

module.exports = { BuildingsQueries }