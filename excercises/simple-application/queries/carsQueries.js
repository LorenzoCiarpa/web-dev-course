const {mysql} = require('../config/databaseConfig');

class CarsQueries {

    static async getCarsByEmail(email) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT id
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

    static async getCar(id) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT * 
                FROM cars
                WHERE id = ?
            `;

            mysql.query(sql, [id], (err, rows, fields) => {
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

    static async deleteCar(id) {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE 
                FROM cars
                WHERE id = ?
            `;

            mysql.query(sql, [id], (err, rows, fields) => {
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

    static async insertCar(nome, marca, anno_immatricolazione, email) {
        return new Promise((resolve, reject) => {
            let sql = `
            INSERT INTO cars
                (nome, marca, anno_immatricolazione, proprietario)
            VALUES
                (?, ?, ?, ?)
            `;

            mysql.query(sql, [nome, marca, anno_immatricolazione, email], (err, rows, fields) => {
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

    // {
    //     insertId, // insert in db, 0 se non inserito else ritorna id record inserito, solo se id ha pk incrementale (int)
    //     affectedRows,  // delete, numero di righe eliminate, (update condizionale valore diverso da changedRows)
    //     changedRows  // update, numero di righe che hanno cambiato valore
    // }
    
}

module.exports = { CarsQueries }