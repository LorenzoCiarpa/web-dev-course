const {Validator} = require('../utils/Validator');

class CarsValidation {
    
    static validateId(id) {

        if(!Validator.isNaturalInteger(id)){
            return false;
        
        }

        return true
    }

}

module.exports = { CarsValidation }