
class PeopleValidation {
    
    static validateSetPeople(email, name, surname, city) {
        let regexLogged = /^[aeiouAEIOU]*$/
        let regexName = /^[a-zA-Z]*$/
        let regexCity = /^[a-zA-Z ]*$/
        let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        
        if(!regexName.test(name)){
            return false
        
        }

        if(!regexName.test(surname)){
            return false;
        
        }

        if(!regexEmail.test(email)){
            return false;
        
        }

        if(!regexCity.test(city)){
            return false;
        
        }
        return true
        // if(isNaN(age) && Number(age) < 0){
        //     return;
        // }
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

module.exports = { PeopleValidation }