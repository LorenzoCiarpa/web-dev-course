// const jwt = require('jsonwebtoken');
// const {AuthService} = require('../services/authService')
const {CarsQueries} = require('../queries/carsQueries')
const {AuthQueries} = require('../queries/authQueries')
const {AuthValidation} = require('../validations/authValidation')
// const {AuthInterface} = require('../interfaces/authInterface')
const {CarsInterface} = require('../interfaces/carsInterface')




const getCar = async (req, res, next) => { 
    //Dati input
    let id = req.body.id;

    //Validazione
    if(!CarsValidation.validateId(id)){
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }

    let car
    try{
        car = await CarsQueries.getCar(id);
    }catch(error){
        console.log(`Error in CarsQueries.getCar, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in getCar"
        })
    }

    console.log(car)

    
    
    return res
    .status(200)
    .json({
        success: true,
        car
    });
    
}





module.exports = {
    getCar
};