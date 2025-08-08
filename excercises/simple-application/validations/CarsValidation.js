const {Validator} = require('../utils/Validator');

class CarsValidation {
    
    static validateId(id) {

        if(!Validator.isNaturalInteger(id)){
            return false;
        
        }

        return true
    }

    
    static validateCreateCar(email, nome, marca, anno) {

        if(!Validator.validateInput(email, nome, marca, anno)){
            return false;
        }

        if(!Validator.validateEmail(email)){
            return false;
        
        }

        if(!Validator.validateAlphaNumeric(nome)){
            return false;
        
        }

        if(!Validator.validateName(marca)){
            return false;
        
        }


        if(!Validator.isNaturalInteger(anno) || anno < 1980){
            return false;
        }

        return true
    }

}

module.exports = { CarsValidation }