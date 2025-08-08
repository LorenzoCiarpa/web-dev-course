const {mysql} = require('../config/databaseConfig');

class PeopleQueries {
    
    static async getPeopleAllPeople() {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT *
                FROM people;
            `;

            mysql.query(sql, [], (err, rows, fields) => {
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

    

    static async getPeopleByEmail(email) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT *
                FROM presona
                WHERE email = ?;
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

    static async getPersonByEmail(email) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT *
                FROM people
                WHERE email = ?;
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

    static async getPeopleByAge(age) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT *
                FROM presona
                WHERE age = ?;
            `;

            mysql.query(sql, [age], (err, rows, fields) => {
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

    static async setPerson(email, name, surname, age) {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO people
                    (email, nome, cognome, citta)
                VALUES
                    (?, ?, ?, ?);
            `;

            mysql.query(sql, [email, name, surname, age], (err, rows, fields) => {
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

    // static async setPerson({email, name, surname, age}) {
    //     return new Promise((resolve, reject) => {
    //         let sql = `
    //         INSERT INTO persona
    //             (email, name, surname, age)
    //         VALUES
    //             (?, ?, ?, ?);
    //         `;

    //         mysql.query(sql, [age], (err, rows, fields) => {
    //             if (err) {
    //                 return reject(new Error(err.message));
    //             }
    //             if (rows == undefined || rows == null) {
    //                 return reject({
    //                     message: "undefined"
    //                 });
    //             } else {
    //                 return resolve(JSON.parse(JSON.stringify(rows)));
    //             }

    //         });
    //     });
    // }

    // static async setPerson(person) {
    //     return new Promise((resolve, reject) => {
    //         let sql = `
    //         INSERT INTO persona
    //             (email, name, surname, age)
    //         VALUES
    //             (?, ?, ?, ?);
    //         `;

    //         mysql.query(sql, [age], (err, rows, fields) => {
    //             if (err) {
    //                 return reject(new Error(err.message));
    //             }
    //             if (rows == undefined || rows == null) {
    //                 return reject({
    //                     message: "undefined"
    //                 });
    //             } else {
    //                 return resolve(JSON.parse(JSON.stringify(rows)));
    //             }

    //         });
    //     });
    // }

    // static async setPeople(people) {
    //     return new Promise((resolve, reject) => {

    //         let sql = `
    //         INSERT INTO persona
    //             (email, name, surname, age)
    //         VALUES 
    //         `;

    //         for(let i = 0; i < people.length; i++){
    //             sql += ` (?, ?, ?, ?)`;
    //             if(i != people.length - 1) sql += `,`;
    //         }
    //         sql += `;`;

    //         mysql.query(sql, [people], (err, rows, fields) => {
    //             if (err) {
    //                 return reject(new Error(err.message));
    //             }
    //             if (rows == undefined || rows == null) {
    //                 return reject({
    //                     message: "undefined"
    //                 });
    //             } else {
    //                 return resolve(JSON.parse(JSON.stringify(rows)));
    //             }

    //         });
    //     });
    // }

    

}

module.exports = { PeopleQueries }