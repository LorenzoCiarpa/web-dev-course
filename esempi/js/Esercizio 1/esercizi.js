function changeName(){
    var name = document.getElementsByTagName("input")[1];

    if(name.value == ""){
        console.log("Il campo nome non può essere vuoto");
    }
}



function addSurnameListener(){
    var surname = document.getElementsByTagName("input")[0];
    surname.addEventListener("keydown", (e) => {
        if(surname.value.length == 1 && e.key.toLowerCase() == "backspace"){
            console.log("Il campo cognome non può essere vuoto");
        }

    });
}


function checkInvia(){
    var opt = document.getElementsByTagName("option");


    // var opt1 = document.querySelector("select[name='regione'] option");
    // var optAll = document.querySelectorAll("select[name='regione'] option");


    var email = document.getElementsByName("email")[0];
    var tel = document.getElementsByName("tel")[0];

    if(email.value == "" && tel.value == "" ){
        console.log("Almeno uno tra telefono e email deve essere non vuoto");
        return;
    }

    // for(i=0; i<opt.length; i++){
    //     if(opt[i].selected){
    //         if(opt[i].value=="nessuna"){
    //             alert("non hai selezionato nessuna regiona");
    //             return;
    //         }
    //     }
    // }


    // if(opt[0].selected){
    //     alert("non hai selezionato nessuna regiona");
    // }

    //CON QUERYSELECTOR

    // for(i=0; i<optAll.length; i++){
    //     if(optAll[i].selected){
    //         if(optAll[i].value=="nessuna"){
    //             alert("non hai selezionato nessuna regiona");
    //             return;
    //         }
    //     }
    // }



    // if(opt1.selected){
    //     alert("non hai selezionato nessuna regiona");
    // }


}

function changeAnno(){
    var anno = document.getElementsByName("anno")[0];
    if(anno.value.length > 0){
        if( (anno.value) < 1 || (anno.value) > 5 ){
            console.log("Il valore deve essere compreso tra 1 e 5");
            return;
        }


        if(anno.value.length == 2){
            if(anno.value.toUpperCase() != "FC" ) {
                console.log("Il campo anno deve assumere un valore tra 1 e 5, oppure 'FC'");
            }
        }
    }


}
