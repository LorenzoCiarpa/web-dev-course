function solEsercizio1(){
    var input = document.getElementsByTagName("input");
    var cognome = input[0];
    var nome = input[1];
    var matricola = input[2];
    var email = input[3];
    var tel = input[4];

    var opt = document.getElementsByTagName("option");




    var i;
    var selected;



    for(i=0; i<opt.length; i++){
        if(opt[i].selected){
            selected = opt[i].value;
            if(opt[i].value=="nessuna"){
                alert("non hai selezionato nessuna regiona");
                return;
            }
        }
    }

    if(cognome.value==""){
        alert("cognome vuoto");
        return;

    }else if(nome.value==""){
        alert("nome vuoto");
        return;

    }else if(matricola.value==""){
        alert("matricola vuoto");
        return;

    }else if(isNaN(matricola.value)){
        alert("matricola non è un numero");
        return;

    }else if(email.value==""){
        alert("email vuoto");
        return;

    }else if(tel.value==""){
        alert("tel vuoto");
        return;

    }

    var dati = {
        nome: nome.value,
        cognome: cognome.value,
        email: email.value,
        tel: tel.value,
        matricola: matricola.value,
        opt: selected

    };


    console.log(dati);

}

function solEsercizio2(){

}

function solKeyPressed(elem){

    if(elem.name == "nome"){
        var isN = false;

        for(e of elem.value){
            if(!isNaN(e) && e != " "){
                isN = true;
            }
        }
        if(isN){
            console.log("è un numero, SBAGLIATO");
        }else{
            console.log("non è un numero, CORRETTO");
        }

    }else if(elem.name == "cap"){
        if(elem.value.length == 5){
            if(isNaN(elem.value)){
                console.log("non è un numero, SBAGLIATO");
            }else{
                console.log("è un numero, CORRETTO");
            }
        }
    }

}

function exitCap(elem){
    if(elem.value.length != 5){
        console.log("Il cap deve essere lungo 5 elementi");
    }
}
