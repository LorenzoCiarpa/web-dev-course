const { PeopleHelper } = require('./../helpers/peopleHelper')

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

}

module.exports = { PeopleService }