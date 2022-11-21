// const jwt = require('jsonwebtoken');
// const {AuthService} = require('../services/authService')
const {AuthQueries} = require('../queries/authQueries')
const {AuthValidation} = require('../validations/authValidation')
// const {AuthInterface} = require('../interfaces/authInterface')


const getNormalMessage = (req, res) => {
    console.log("req.body: ", req.body)
    console.log("req.query: ", req.query)
    console.log("req.params: ", req.params)
    return res.status(200).send('ciao');
}

const getJson = (req, res) => {
    

    let name = req.body.name ? req.body.name : 'defaultname';
    let surname = req.body.surname ? req.body.surname : 'defaultsurname';
    let email = req.body.email ? req.body.email : 'defaultEmail@gmail.com';

    let body = req.body;
    let query = req.query;
    let params = req.params;



    console.log("input: ",name, surname, email)

    let regexLogged = /^[aeiouAEIOU]*$/
    let regexName = /^[a-zA-Z]*$/
    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!regexName.test(name)){
        return res
        .status(401)
        .json({
            success: false,
            error: {
                errorMessage: `Your name is not correct`,
            }
        });
    
    }

    if(!regexName.test(surname)){
        return res
        .status(401)
        .json({
            success: false,
            error: {
                errorMessage: `Your surname is not correct`,
            }
        });
    
    }

    if(!regexEmail.test(email)){
        return res
        .status(401)
        .json({
            success: false,
            error: {
                errorMessage: `Your email is not correct`,
            }
        });
    
    }

    if(regexLogged.test(name[0])){
        return res
        .status(200)
        .json({
            success: true,
            data: {
                name,
                surname,
                email,
                logged: true
            }
        });
    }

    return res
    .status(200)
    .json({
        success: true,
        data: {
            name,
            surname,
            email,
            logged: false
        }
    });
    

}

const getHtml = (req, res) => {

    return res
    .status(200)
    .send(
    `<html>
        <head>
            <title>
                Titolo di scheda
            </title>
        </head>
        <body>
            <h1>Titolo h1</h1>
            <p>Paragrafo</p>
        </body>
    </html>
    `
    )
}

const getHtmlView = (req, res) => {

    return res
    .status(200)
    .render('index')
}

const authControllerOne = (req, res, next) => { //"/api" + "/"
    console.log("Rotta 1")
    return res.status(200).send("Rotta 1")
}

const authControllerTwo = async (req, res, next) => { 
  
    console.log("Rotta 2")
    res.status(200).send("Rotta 2")
    return;
}
//installare un middleware to check validità nickname
const signUp = async (req, res, next) => { 
    //Dati input
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    //Validazione
    if(!AuthValidation.validateSignUp(email, username)){
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }
    //Inserire la getUser (Query) e vedere se l'utente già esiste
    //If exist return error
    //else continue
    let response
    try{
        response = await AuthQueries.setUser(email, password, username);
    }catch(error){
        console.log(`Error in AuthQueries.setUser, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in setUser"
        })
    }

    
    return res
    .status(200)
    .json({
        success: true
    });
    
}

const login = async (req, res, next) => { 
    //Dati input
    let email = req.body.email;
    let password = req.body.password;

    //Validazione
    if(!AuthValidation.validateSignUp(email)){
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }

    let response
    try{
        response = await AuthQueries.getUser(email, password);
    }catch(error){
        console.log(`Error in AuthQueries.getUser, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in getUser"
        })
    }

    if(response.length == 0){
        return res
        .status(200)
        .json({
            success: false,
            errorMessage: "User non è registrato"
        })
    }

    //fare la getCars(email) e filtra creando un array di soli id delle cars
    
    return res
    .status(200)
    .json({
        success: true
    });
    
}

const updatePassword = async (req, res, next) => { 
    //Dati input
    let email = req.body.email;
    let password = req.body.password;
    let newPassword = req.body.newPassword;

    //Validazione
    if(!AuthValidation.validateSignUp(email)){
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }

    let response
    try{
        response = await AuthQueries.getUser(email, password);
    }catch(error){
        console.log(`Error in AuthQueries.getUser, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in getUser"
        })
    }

    if(response.length == 0){
        return res
        .status(200)
        .json({
            success: false,
            errorMessage: "User non è registrato"
        })
    }

    let updateResponse
    try{
        updateResponse = await AuthQueries.updatePassword(email, password, newPassword);
    }catch(error){
        console.log(`Error in AuthQueries.updatePassword, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in updatePassword"
        })
    }
    
    return res
    .status(200)
    .json({
        success: true
    });
    
}

const deleteUser = async (req, res, next) => { 
    //Dati input
    let email = req.body.email;
    let password = req.body.password;

    //Validazione
    if(!AuthValidation.validateSignUp(email)){
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in validate input"
        })
    }

    let response
    try{
        response = await AuthQueries.deleteUser(email, password);
    }catch(error){
        console.log(`Error in AuthQueries.deleteUser, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in deleteUser"
        })
    }

    console.log(response)

    if(response.affectedRows == 0){
        return res
        .status(200)
        .json({
            success: false,
            errorMessage: "User non è stato cancellato"
        })
    }
    
    return res
    .status(200)
    .json({
        success: true
    });
    
}


const handleResponse = (req, res) => {
    let response = req.locals;

    return res
    .status(response.status)
    .json(response.data)
}




module.exports = {
    getNormalMessage,
    getJson,
    getHtml,
    getHtmlView,
    authControllerOne,
    authControllerTwo,
    handleResponse,
    signUp,
    login,
    updatePassword,
    deleteUser
};