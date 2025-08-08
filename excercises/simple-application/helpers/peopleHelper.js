const axios = require('axios')

let headers = ""
let url = "https://dev-test-hn.herokuapp.com/api/m1/auth/getJson"


class PeopleHelper {
    constructor() { }

    static async getInfoFromWebsite(name, surname, email) {
        let info;
        try{
            info = await axios.post(url, {
                name,
                surname,
                email
            })
        }catch(error){
            console.log(error.response.data)
            return error.response.data
        }
        
        
        // fetch(url, { 
        //     method: 'POST', 
        //     body: JSON.stringify({ 
        //         "name": name,
        //         "surname":surname,
        //         "email": email
        //     }), 
        //     headers: headers
        // })

        // info = await info.json();

        console.log(info.data)

        return info.data;
       
    }

}

module.exports = { PeopleHelper }