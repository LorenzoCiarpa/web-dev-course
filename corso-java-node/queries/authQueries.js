const {mysql} = require('../config/databaseConfig');

class AuthQueries {

    static async setUser(email, password, surname) {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO auth
                    (email, password, username)
                VALUES
                    (?, ?, ?);
            `;

            mysql.query(sql, [email, password, surname], (err, rows, fields) => {
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

    static async getUser(email) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT * 
                FROM auth
                WHERE email = ?
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

    static async getUserForLogin(email, password) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT * 
                FROM auth
                WHERE email = ?
                AND password = ?
            `;

            mysql.query(sql, [email, password], (err, rows, fields) => {
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
    
    
    static async updatePassword(email, password, newPassowrd) {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE auth 
                SET password = ?
                WHERE email = ?
                AND password = ?
            `;

            mysql.query(sql, [newPassowrd, email, password], (err, rows, fields) => {
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

    static async deleteUser(email, password) {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM auth 
                WHERE email = ? 
                AND password = ? 
            `;

            mysql.query(sql, [email, password], (err, rows, fields) => {
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

module.exports = { AuthQueries }