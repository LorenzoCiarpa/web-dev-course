// const jwt = require('jsonwebtoken');

const {PeopleService} = require('../services/peopleService')
const {PeopleQueries} = require('../queries/peopleQueries')
const {PeopleValidation} = require('../validations/peopleValidation')
const {PeopleInterface} = require('../interfaces/peopleInterface')

// let people = [
//     {
//         name: "lorenzo",
//         surname: "ciarpa", 
//         email: "",
//         age: 15
//     },
//     {
//         name: "lorenzo",
//         surname: "ciarpa", 
//         email: "",
//         age: 22
//     },
//     {
//         name: "lorenzo",
//         surname: "ciarpa", 
//         email: "",
//         age: 44
//     },
//     {
//         name: "lorenzo",
//         surname: "ciarpa", 
//         email: "",
//         age: 54
//     }
// ]

const getAllPeople = async (req, res) => {
    let people
    try{
        people = await PeopleQueries.getPeopleAllPeople();
    }catch(error){
        console.log("error in getAllPeople", error)
    }


    people = PeopleInterface.formatGetAllPeople(people)

    return res
    .status(200)
    .json({
        success: true,
        data: {
            people
        }
    });
}

const getPeopleByAge = async (req, res) => {
    let age = req.query.age;

    if(age == null || age == undefined){
        return res.status(401).send("Non hai inserito l'età")
    }

    let arrayFiltrato = await PeopleService.filtraArray(people, age)

    return res.status(200).json({
        filteredPeople: arrayFiltrato
    });
}

const getPeopleByEmail = (req, res) => {

    return res.status(200).send('ciao');
}

const setPeople = async (req, res) => {


    // let body = req.body;
    // let query = req.query;
    // let params = req.params;

    //Validazione alle variabili in input
    let email = req.body.email;
    let name = req.body.name;
    let surname = req.body.surname;
    let city = req.body.city;
    // let age = req.body.age;

    console.log("input: ",name, surname, email, city)

    if(!PeopleValidation.validateSetPeople(email, name, surname, city)){
        return res
        .status(401)
        .json({
            success: false,
            error:{
                errorMessage: "Erroe in in input"
            }
        });
    }

    

    //Logica
    let response
    try{
        response = await PeopleService.setPeople(email, name, surname, city)
    }catch(error){
        console.log("Error in setPerson")
        return res
        .status(401)
        .json({
            success: false,
            error:{
                 errorMessage: "Error in service.setPerson"
            }
        })
    }
    
    console.log(response)

    // PeopleInterface.setFormaSetPerson();
    
    if(!response.success){
        return res
        .status(401)
        .json(response);
    }

    //Formattazione (Interface)

    return res
    .status(200)
    .json(response);
    

}

const updatePeople = (req, res) => {

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

const getInfoFromWebsite = async (req, res) => {

    let name = req.query.name
    let surname = req.query.surname
    let email = req.query.email


    let info = await PeopleService.getInfoFromWebsite(name, surname, email);

    return res
    .status(200)
    .json({
        info: info
    });
}

const deletePeople = (req, res) => {

    return res
    .status(200)
    .render('index')
}

async function handleSet(req, res, next){

    console.log("Rotta 3")
    res
    .status(200)
    .send("Rotta 3")

    return;
}

//installare un middleware to check validità nickname





module.exports = {
    getAllPeople,
    getPeopleByAge,
    getInfoFromWebsite,
    handleSet,
    setPeople
};