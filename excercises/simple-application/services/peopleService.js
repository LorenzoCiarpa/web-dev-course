const { PeopleHelper } = require('./../helpers/peopleHelper')
const {PeopleQueries} = require('../queries/peopleQueries')

class PeopleService {
    constructor() { }

    static async filtraArray(array, age) {

        let arrayFiltrato = array.filter((item) => item.age > age)

        console.log(arrayFiltrato)

        return arrayFiltrato;
    }

    static async getInfoFromWebsite(name, surname, email) {

        let info = await PeopleHelper.getInfoFromWebsite(name, surname, email);

        return info;
    }

    static async setPeople(email, name, surname, city){
        let person
        try{
            person = await PeopleQueries.getPersonByEmail(email)

        }catch(error){
            console.log("Error in setPerson: ", error);
            return {
                success: false,
                error:{
                    errorMessage: "Erroe in setPerson query"
                }
            }
        }

        console.log("Person get: ", person)

        if(person.length > 0){
            return {
                success: false,
                error: {
                    errorMessage: "User already exist"
                }
            }
        }


        let responseSet
        try{
            responseSet = await PeopleQueries.setPerson(email, name, surname, city)

        }catch(error){
            console.log("Error in setPerson: ", error);
            return {
                success: false,
                error:{
                    errorMessage: "Erroe in setPerson query"
                }
            }
        }

        return {
            success: true
        }
    }

}

module.exports = { PeopleService }