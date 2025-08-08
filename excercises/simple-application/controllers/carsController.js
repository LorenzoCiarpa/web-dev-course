// const jwt = require('jsonwebtoken');
// const {AuthService} = require('../services/authService')
const {CarsQueries} = require('../queries/carsQueries')
const {AuthQueries} = require('../queries/authQueries')
const {AuthValidation} = require('../validations/authValidation')
// const {AuthInterface} = require('../interfaces/authInterface')
const {CarsInterface} = require('../interfaces/carsInterface')
const {CarsValidation} = require('../validations/carsValidation')




const getCar = async (req, res, next) => { 
    //Dati input
    let id = req.body.id;

    //Validazione
    if(!CarsValidation.validateId(id)){  //Number && sia un intero && sia maggiore >= 0
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

    car = car.length > 0 ? car[0] : {};
    
    return res
    .status(200)
    .json({
        success: true,
        car
    });
    
}

const deleteCar = async (req, res, next) => { 
    //Dati input
    let id = req.body.id;

    //Validazione
    if(!CarsValidation.validateId(id)){  //Number && sia un intero && sia maggiore >= 0
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }

    let carResponse
    try{
        carResponse = await CarsQueries.deleteCar(id);
    }catch(error){
        console.log(`Error in CarsQueries.deleteCar, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in deleteCar"
        })
    }

    console.log(carResponse)

    if(carResponse.affectedRows == 0){
        console.log(`Nessuna riga eliminata`)

        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Nessuna riga eliminata"
        })
    } 
    
    return res
    .status(200)
    .json({
        success: true
    });
    
}


const createCar = async (req, res, next) => { 
    //Dati input
    let email = req.body.email;
    let nome = req.body.nome;
    let marca = req.body.marca;
    let anno = req.body.anno;


    //Validazione
    if(!CarsValidation.validateCreateCar(email, nome, marca, anno)){  //Number && sia un intero && sia maggiore >= 0
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }

    let carResponse
    try{
        carResponse = await CarsQueries.insertCar(nome, marca, anno, email);
    }catch(error){
        console.log(`Error in CarsQueries.deleteCar, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in deleteCar"
        })
    }

    console.log(carResponse)

    if(carResponse.insertId == 0){
        console.log(`Nessuna riga creata`)

        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Nessuna riga creata"
        })
    } 
    console.log("returning res: ", carResponse.insertId)
    
    return res
    .status(200)
    .json({
        success: true,
        id: carResponse.insertId
    });
    
}



module.exports = {
    getCar,
    deleteCar,
    createCar
};