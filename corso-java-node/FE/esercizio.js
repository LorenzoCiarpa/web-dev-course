const headers = { 
    'Content-type': 'application/json; charset=UTF-8' 
}

const urlSignup = "http://localhost:5000/auth/signUp"
const urlLogin = "http://localhost:5000/auth/login"

const urlGetCar = "http://localhost:5000/cars/getCar"
const urlDeleteCar = "http://localhost:5000/cars/deleteCar"
const urlCreateCar = "http://localhost:5000/cars/createCar"

let emailLogged;

async function signUp(){

    let email = document.querySelector('input[name=email]').value;
    let username = document.querySelector('input[name=username]').value;

    let password = document.querySelectorAll('input[name=password]')[0].value;
    let confermaPassword = document.querySelectorAll('input[name=password]')[1].value;

    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let regexName = /^[a-zA-Z]*$/
    let regexMinuscola = /^[a-z]*$/
    let regexMaiuscola = /^[A-Z]*$/
    let regexDigits = /^[0-9]*$/
    let regexSpecial = /^[!.-_]*$/
    
        
    // if(password != confermaPassword) {
    //     let errorElements = document.querySelectorAll('label[name=errorpassword]')
    //     handleError(errorElements, "Le password non corrispondono")
    //     console.log("Le password non corrispondono")
    // }

    // if(!regexMinuscola.test(password) || !regexMaiuscola(password) || !regexDigits(password) || !regexSpecial(password)) {
    //     let errorElements = document.querySelectorAll('label[name=errorpassword]')
    //     handleError(errorElements, "Le password non riepsttano il minimo")
    //     console.log("Le password non riepsttano il minimo")
    // }

    // if(!regexEmail.test(email)) {
    //     let errorElements = document.querySelector('label[name=erroremail]')
    //     handleError([errorElements], "Non hai inserito una email")
    //     console.log("Non è una mail")
    // }

    // if(!regexName.test(username)) {
    //     let errorElements = document.querySelectorAll('label[name=errorusername]')
    //     handleError([errorElements], "Lo username può contenere solo caratteri")
    //     console.log("Non è uno username")
    // }

    password = CryptoJS.MD5(password).toString();

    let body = {
        email,
        password,
        username
    }

    // let response = await callFetch(urlSignup, "PUT", JSON.stringify(body), headers);
    let responseAxios = await callAxios(urlSignup, body, "PUT");

    // console.log("fetch: ", response)
    console.log("Axios: ", responseAxios.data)

    if(response.success){
        let display = document.querySelector('#response');
        display.innerHTML = "Registrazione avvenuta con successo"
    }
}

async function login(){

    let email = document.querySelector('input[name=email]').value;
    
    let password = document.querySelectorAll('input[name=password]')[0].value;

    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
    if(!regexEmail.test(email)) {
        let errorElements = document.querySelector('label[name=erroremail]')
        handleError([errorElements], "Non hai inserito una email")
        console.log("Non è una mail")
    }

    password = CryptoJS.MD5(password).toString();

    let body = {
        email,
        password
    }
    let response;
    // response = await callFetch(urlLogin, "POST", JSON.stringify(body), headers);
    let responseAxios = await callAxios(urlLogin, body, "POST");

    // console.log("fetch: ", response)
    // console.log("Axios: ", responseAxios.data)

    response = response ? response : responseAxios.data

    if(!response.success) return;

    emailLogged = email;

    let display = document.querySelector('#response');

    for(let elem of response.cars){
        

        let divParent = document.createElement("div")
        let label = document.createElement("label")
        let buttonGet = document.createElement("button")
        let buttonDelete = document.createElement("button")

        let textLabel = document.createTextNode("id: car-" + elem.id + "\n");
        let textbuttonGet = document.createTextNode("getCar");
        let textbuttonDelete = document.createTextNode("deleteCar");

        divParent.setAttribute("name", "car-" + elem.id);
        
        label.setAttribute("name", "car-" + elem.id);

        label.append(textLabel);
        buttonGet.append(textbuttonGet);
        buttonDelete.append(textbuttonDelete);

        divParent.appendChild(label)
        divParent.appendChild(buttonGet)
        divParent.appendChild(buttonDelete)

        display.appendChild(divParent)

        buttonGet.addEventListener('click', async (event) => {

            let body = {
                id: elem.id
            }
            
            
            let responseGetCar = await callAxios(urlGetCar, body, "POST");


            responseGetCar = responseGetCar.data;

            if(!responseGetCar.success) return;

            // let divParent = event.target.parentNode
            // let elemFratello = event.target.fratello

            let labelToChange = document.querySelector(`label[name=car-${elem.id}]`);

            labelToChange.innerText =  `
                id: ${responseGetCar.car.id}
                marca: ${responseGetCar.car.marca}
                nome: ${responseGetCar.car.nome}
                anno: ${responseGetCar.car.anno_immatricolazione}
                proprietario: ${responseGetCar.car.proprietario}
            `;

            
        })


        buttonDelete.addEventListener('click', async (event) => {
            let body = {
                id: elem.id
            }
            
            
            let responseGetCar = await callAxios(urlDeleteCar, body, "DELETE");


            responseGetCar = responseGetCar.data;

            if(!responseGetCar.success) return;

            // let divParent = event.target.parentNode
            // let elemFratello = event.target.fratello

            let divToDelete = document.querySelector(`div[name=car-${elem.id}]`);

            divToDelete.remove();

            
        })


    }

}


async function createCar(){

    let nome = document.querySelector('input[name=nome]').value;
    let marca = document.querySelector('input[name=marca]').value;
    let anno = document.querySelector('input[name=anno]').value;

    // let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
    // if(!regexEmail.test(email)) {
    //     let errorElements = document.querySelector('label[name=erroremail]')
    //     handleError([errorElements], "Non hai inserito una email")
    //     console.log("Non è una mail")
    // }
    let body = {
        email: emailLogged,
        nome,
        anno,
        marca
    }


    let response;
    // response = await callFetch(urlLogin, "POST", JSON.stringify(body), headers);
    let responseAxios
    try{    
        responseAxios = await callAxios(urlCreateCar, body, "POST");

    }catch(error){
        console.log("Error in calling createCar: ", error)
        return
    }

    // console.log("fetch: ", response)
    // console.log("Axios: ", responseAxios.data)

    response = response ? response : responseAxios.data

    if(!response.success) return;

}

function handleError(obj, msg){
    for(let elem of obj){
        switch(elem.getAttribute("name")){
            case "errorpassword":
                elem.innerHTML = msg
                break;
            
            case "erroreemail": 
                elem.innerHTML = msg
                break;

            case "username": 
                elem.innerHTML = msg
                break;
        }
        
    }
}

function cripta(){
    let hash = CryptoJS.MD5('ciao');
    console.log(hash.toString())
}

async function callFetch(url, method, body, headers){
    let obj = {
        method,
        body,
        headers
    }
    let response = await fetch(url, obj);
    let jsonParsed = response.json();

    return jsonParsed
}

async function callAxios(url, data, method){
    return await axios({
        method,
        url,
        data
    });
}