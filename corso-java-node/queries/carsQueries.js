const {mysql} = require('../config/databaseConfig');

class CarsQueries {

    static async getCarsByEmail(email) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT * 
                FROM cars
                WHERE proprietario = ?
            `;

            mysql.query(sql, [email], (err, rows, fields) => {
                if (err) {
                    return reject(new Error(err.message));
                }
                if (rows == undefined || rows == null) {
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

module.exports = { CarsQueries }