
class PeopleInterface {
    
    static formatGetAllPeople(people) {
        let responseArr = []
        for(let elem of people){
            responseArr.push({
                name: elem.nome,
                surname: elem.cognome,
                email: elem.email
            });
        }

        return responseArr
    }

    


    

}

module.exports = { PeopleInterface }