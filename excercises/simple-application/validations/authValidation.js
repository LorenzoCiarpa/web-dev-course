const {Validator} = require('../utils/Validator');

class AuthValidation {
    
    static validateSignUp(email, surname) {

        if(!Validator.validateName(surname)){
            return false;
        
        }

        if(!Validator.validateEmail(email)){
            return false;
        
        }
        

        return true
    }

}

module.exports = { AuthValidation }