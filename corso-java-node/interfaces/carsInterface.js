
class CarsInterface {
    
    static formatGetCarsForLogin(cars) {
        let responseArr = []
        for(let elem of cars){
            responseArr.push({
                id: elem.id
            });
        }

        return responseArr
    }

}

module.exports = { CarsInterface }