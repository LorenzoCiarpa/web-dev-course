
class Validator {

    static validateInput(...input){
        for(let i = 0; i < input.length; i++){
            if(input[i] == undefined || input[i] == null){
                return false;
            }
        }
    
        return true;
    }

    static validateName(name){
        let regexName = /^[a-zA-Z]*$/
        return regexName.test(name);
    }

    static validateAlphaNumeric(name){
        let regexName = /^[a-zA-Z0-9]*$/
        return regexName.test(name);
    }

    static validateEmail(email){
        let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regexEmail.test(email);
    }

    static validateCity(city){
        let regexCity = /^[a-zA-Z ]*$/
        return regexCity.test(city);
    }

    static isNaturalInteger(str_) {
        if (typeof str_ !== 'string' && typeof str_ !== 'number') {
          return false;
        }

        if(isNaN(str_)){
            return false;
        } 
      
        const num = Number(str_);
      
        if (Number.isInteger(num) && num >= 0) {
          return true;
        }

        return false;
    }
    
}

module.exports = { Validator }