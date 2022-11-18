// const jwt = require('jsonwebtoken');

const {PeopleService} = require('../services/peopleService')

let people = [
    {
        name: "lorenzo",
        surname: "ciarpa", 
        email: "",
        age: 15
    },
    {
        name: "lorenzo",
        surname: "ciarpa", 
        email: "",
        age: 22
    },
    {
        name: "lorenzo",
        surname: "ciarpa", 
        email: "",
        age: 44
    },
    {
        name: "lorenzo",
        surname: "ciarpa", 
        email: "",
        age: 54
    }
]

const getAllPeople = (req, res) => {
    return res.status(200).send('ciao');
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

const setPeople = (req, res) => {
    

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


//installare un middleware to check validità nickname





module.exports = {
    getPeopleByAge,
    getInfoFromWebsite
};