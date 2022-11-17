// fetch('/api/m1/buildings/claim', { 
//     method: 'POST', 
//     body: JSON.stringify({ 
//         "address": "0x26881c56f7791e8f36cCF0A337CA2c53f0Ae10c8","idBuilding":602,"type":1, "idDelegate": 84 
//     }), 
//     headers: { 
//       'Content-type': 'application/json; charset=UTF-8' 
//     } 
//   }) 
//   .then(res => res.json()) 
//   .then(console.log)

var persona = {
    nome: "Lorenzo",
    cognome: "Ciarpaglini",
    eta: 22,
    profilo: {
        titolo: "Ingegnere Informatico e Automatico",
        progetti: ["Netflix","SmartHouse","Martino"]
    },
    fullData: function(){
        return this.nome + " " + this.cognome + " " + this.eta;
    }
};

let esBackTick = `${persona.nome} ${persona.cognome} ${JSON.stringify(persona.profilo)}`

async function newFetch(url,obj){
    return new Promise((resolve, reject) => {

        let xhrq = new XMLHttpRequest();

        xhrq.open(obj.method, url);
        xhrq.setRequestHeader('Content-Type', obj.headers['Content-Type']);
        xhrq.responseType = "json";

        xhrq.send(JSON.stringify(obj.body));
        xhrq.onload = () => {
            if (xhrq.status >= 400) {
                console.log("Hai sbagliato qualcosa");
                reject(xhrq.reject);
            }
            if (xhrq.status == 200) {
                console.log("Ok")
                resolve(xhrq.response);
            }
            if (xhrq.status == 201) {
                console.log("Tutto ok");
                resolve(xhrq.response);
            }
        };
        xhrq.onerror = (error) => {
            console.log("errore");
            reject(error)
        }

    });
}

async function onClickHandler(){
    // '... (validzioni campi)' 
    let body = {
        nome, 
        surname,
        email
    }

    let headers= { 
        'Content-type': 'application/json; charset=UTF-8' 
    }

    let method = 'GET'

    let url = 'https://dev-test-hn.herokuapp.com/api/m1/auth/getJson'
    let response = await callFetch(url, method, body, headers);

    if(!response.success){
         console.log("Errore nella richiesta")
         return
    }

    let message = 'Benvenuto'
    if(response.data.logged) message = 'Bentornato'
    
    // '... manipolazione dom risposta'
}

async function callFetch(url, method, body, headers){
    let obj = {
        method: method,
        body,
        headers
    }
    let response = await fetch(url, obj);
    let jsonParsed = response.json();

    return jsonParsed
}