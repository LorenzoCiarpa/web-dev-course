// var x;
// let z;
// const p = 340; //Math.PI;
//


//VARIABILE CONST
//Una variabile const deve essere inizializzata quando dichiarata
//Proprietà di un oggetto const possono variare ma l'oggetto non può essere riaseegnato
//Valori di un array const possono cambiare ma alla var const non può essere assegnato un altro array;

//
// const obj = {// 900
//     nome: "Lorenzo", //1000
//     cognome: "Ciarpaglini"
// };
//
// const arr = [10,20,30];


//AZIONI LEGALI

// obj.nome = "Andrea";
// arr[0] = 50;
// console.log("oggetto",obj);
// console.log("array",arr);


//AZIONI ILLEGALI

// obj = {
//     nome: "paolo",
//     cognome: "Pippo"
// };
//
// arr = [60,70,80];


//
// {
//     var x = 10;
//     let z = 20;
//     const p = Math.PI;
//     //QUI sono visibili tutte
// }

//QUI solo var x è visibile


// var x = 10;
// let z = 20;
// const p = Math.PI;
// {
//     var x = 100;
//     let z = 200;
//     const p = 1000;
//
// }
//
//
// console.log(x);
// console.log(z);
// console.log(p);



//DA QUI useremeo solo var per semplicità




//CAMBIO DI VALORE DI UNA VARIABILE

//Tipi di dato primitivo (semplici)


//Number
var x = 10;
x = 20.30;


//String
x = "ciao";


//ARRAY
x = [];
x = ["elem1","elem2","elem3"];
x = [10,20,30,40];
x = ["elem1","elem2","elem3",4,[1,2,3],true]; //Anche oggetti e funzioni, null e undefined
// console.log(x);


//Array associativo o Mappa
var y_arr = new Array();
y_arr['ciao'] = "ciao";
y_arr['tre'] = 3;
y_arr['funzione'] = prova;

// console.log(y_arr);
// console.log(y_arr['funzione']);
// console.log(y_arr['funzione']());


//Array Misto
x = [];
x = ["elem1","elem2","elem3"];
x['prova']=3;
// console.log("Array misto",x);


//Inserimento di un elemento in un Array in una posizione di mia scelta
// x[20] = 1000;
// console.log(x);


//Boolean
x = true;
x = false;

//UNDEFINED
x = undefined;

//NULL
x = null;






//Tipi di dato complesso

//FUNZIONI

//variabile come funzione (anonymous function)
x = function(){
    return 3;
}

console.log(typeof x);

// console.log(x);
// console.log(x());


//funzione classica
function prova(){
    return 3;
}

// x = prova();
// console.log("return di funzione",x);



//Arrow Function senza param
// x = () => {return 3;};
// console.log("Arrow function senza param",x());


//Arrow function con param
// x = (val, val2) => {
//     var locale = val + val2;
//     return locale;
// };
// console.log("arrow function con param",x(3,7));



//Self invoking Function (anonymous function)
// (function(){
//     console.log("Self invoking function", 3);
// })();





//Oggetti

// var exempio = "ciao";
// exempio: exempio, //si può accorciare mettendo solo exempio senza i : exempio (ESA6) Non faremo solo accenno dopo spiegazione oggetti

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


//
// console.log(persona.nome);
// console.log(persona["cognome"]);
// console.log(persona.fullData());

//ALTRI ESEMPI DI ACCESSO AD ELEMENTI DI OGGETTO TRAMITE CONSOLE



//Aggiungere Proprietà e Metodi dopo creazione
persona.citta = "Roma";
// persona.ritornaCitta = function(){
//     return this.citta;
// }


//Manipolazione tramite console + exempio in oggetto + riferimento ad oggetto
// var tizio = persona;

//Consiglio mai dichiarare Numeber, Boolean, String with new


//
// var y = [];
// var z = new Array();
//
// var r = "";
// var t = new String("");
//
// console.log(typeof y);
// console.log(typeof z);
//
// console.log(typeof r);
// console.log(typeof t);
//
//  console.log(typeof NaN);



//TEORIA

// DIFFERENZA tra == e ===
// == solo VALORE
// === valore e tipo (Per gli oggetti mi sembra sia sempre false)

// var str = new String("");
// var str1 = new String("");
//
//
// var str2 = "";
// var str3 = "";
//
// var num = 3;
// var num_str = "3";


//HOISTING
/* La definizione di una variabile var e di una funzione viene spostata all'inizio del blocco di dichiarazione.
Questo non vale per una class, let e const.
Dichiara sempre prima e poi utilizzare*/

//Nuove versioni di JS
/* Non faremo tutte le nuove versioni e funzionalità di JS come (ESA6) (REST Parameters)*/


//DIFFERENZA TRA NULL E UNDEFINED
/*undefined -> variabile dichiarata ma non ancora inizializzata, typeof undefined*/
/*null -> tipo assumibile da variabile per indicare variabile senza significato, typeof object*/


//DIFFERENZA TRA CLASSE E OGGETTO
/*OGGETTO è sia un'istanza di una classe che variabile con proprietà e metodi creati ad-hoc.
CLASSE è un template, un'entità astratta con prorpietà e metodi di classe che possono essere essere istanziati*/
// public class Persona(param){
//     private string nome;
//
//     public Persona(param){
//         this.nome = param;
//     }
// }
//
// Persona persona = new Persona("Lorenzo");


//OVERRIDING E OVERLOADING
// In JS OVERRIDING esiste mentre OVERLOADING NON esiste, ma la si può creare tramite l'uso di undefined.


// function over1(){
//     return 3;
// }

function over1(x){

    return x;
}


//FINE TEORIA



//IF-ELSE
// var y = 2;
// if(y == 0){
//     console.log("0");
// }else if(y == 1){
//     console.log("1");
// }else{
//     console.log("if","2");
// }



//WHILE E DO-WHILE
// var y = 0;
// while(y < 3){
//     console.log("while",y);
//     y++;
// }
//
// y = 0;
// do{
//     console.log("do-while",y);
//     y++;
// }while(y < 3);



//FOR, FOR IN, FOR OF, FOREACH

//FOR

// var i;
// for(i=0; i<3; i++){
//     console.log("for",i);
// }


//FOR IN
//Utile per ciclare sulle prorpietà di un oggetto
// var ar = [10,20,30];
// for(i in ar){
//     console.log("for in",ar[i], i);
// }


//FOR OF (UTILE PER CICLARE GLI ELEMENTI DI UN ARRAY)
// for(i of ar){
//     console.log("for of",i);
// }


//FOREACH (NE ESISTONO DI DUE TIPI, QUESTO è QUELLO DELL'OGGETTO ARRAY), L'ALTRO FORSE LA PROX VOLTA
//Metodologia funzionale caso di arrow function
//Prende fino a  tre parametri: value, index, array.

// ar.forEach((item, i) => {
//     console.log("for each =>",item,i);
// });

//Metodologia funzionale con callback function usando hoisting

// ar.forEach(stampaArray);
//
// function stampaArray(value){
//     console.log("for each callback",value, index,ar);
// }


//
// var ar1 = {
//     arra: [1,2,3],
//     forEach: function forEach(myFunction){
//         for(i = 0; i<arra.length; i++){
//             myFunction(arra[i],i,arra);
//         }
//     }
// }
//
// ar1.forEach(stampaArray);





//SWITCH

// switch (3) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log("switch",3);
//         break;
//     case "ciao":
//         console.log("ciao");
//         break;
//     default:
//         console.log("default");
// }



//CLASSES
class Car{
    constructor(name, brand, persona){
        this.name = name;
        this.brand = brand;
        this.proprietario = "Lorenzo";
        this.objProprietario = persona;
    }//function and variable can't have the same name
    brand(){
        return this.brand;
    }
    resBrand(){
        return this.brand;
    }
    static hello(){
        return "Hello";
    }
}

var car = new Car("Panda", "Fiat", persona);



//Variable and functions can't have the same name
var test = 10;
function test(){
    return 20;
}





//Metodologia corretta con function static
class Car2{
    constructor(name, brand, persona){
        this._name = name;
        this._brand = brand
        this._proprietario = "Lorenzo";
        this._objProprietario = persona;
    }
    brand(){
        return this._brand;
    }
    resBrand(){
        return this._brand;
    }
    static hello(x){//in this case passing an object instanceof Car2
        return "Hello " + x._name;
    }
}

var car2 = new Car2("Polo", "Volkswagen", persona);






//GET SET EXTENDS SUPER
class Car3 extends Car2{
    constructor(name, brand, persona, anno){
        super(name,brand,persona);
        this._anno = anno;
    }
    //In this case esiste l'OVERLOADING
    get marca(){
        return this._brand;
    }

    set marca(x){
        this._brand = x;
    }

}

var car3 = new Car3("golf", "Volkswagen", persona, 2020);
//Esempi:
//car3._objProprietario.profilo.progetti[0];
//car3.marca;
//car3.marca = "fiat";
//Car3.hello(car3);

//Definition of a object constructor as function (VEDI DOPO/PROSSIMA VOLTA)
function Bar(name, via) {
    this._name = name;
    this._via = via;
}

// var bar = new Bar("franco", "Via Roma");
// console.log("Nome Bar:",bar._name);








//TYPEOF E INSTANCEOF
// console.log("typeof:",typeof 3);
// console.log("car3 instanceof Car3:",car3 instanceof Car3);
// console.log("bar instanceof Bar:",bar instanceof Bar);








//JS Async, Callback, Promises

//Callback base
/*Una callback function è una funzione passata come argomento ad un altra funzione.
(esempio Array.forEach(myCallback)) E' una funzione che prende come parametro una callback function*/

// function myDisplayer(some) { //Callback function
//   console.log("callback base",some);
// }
//
// function myCalculator(num1, num2, myCallback) { //funzione che prende come parametro una callback
//   var sum = num1 + num2;
//   myCallback(sum);
// }
//
// myCalculator(5, 5, myDisplayer);







//ASYNC: Utilizzo di callback con funzioni asincrone
// setInterval(myCallBackFunction,3000);
//
// function myCallBackFunction(){
//     console.log("myCallBackFunction");
// }





//ESEMPIO
//Passare una funzione anonima/arrow function
// setTimeout(function(){
//     console.log("secondo esempio");
// },2000);
//
// console.log("ciao");

//Asincrono in JS -> prima eseguo tutto il codice js e poi torno

// while (true) {
//
// }









//PROMISE

/*JS Promise Object can be:
1)Pending
2)Fulfilled
3)Rejected

The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.*/

// function myDisplayerPromise(value){//callback function
//     console.log("myDisplayerPromise",value);
// }
//
// //Asincrona
// var myPromise = new Promise(function(myResolve, myReject) {
//   var x = 0;
//
//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });




// myPromise.then(
//   function(value) {myDisplayerPromise(value);},
//   function(error) {myDisplayerPromise(error);}
// );
//
// console.log("fine");







//Esempio 2
// var myPromise2 = new Promise(function(myResolve, myReject) {
//   var x = 0;
//
//
//   if (x == 0) {
//     myResolve("OK Promise 2");
//   } else {
//     myReject("Error Promise 2");
//   }
// });
//
//
// myPromise2.then(
//  myDisplayerPromise,
//  myDisplayerPromise
// );





//Esempio 3
// var myPromise3 = new Promise(function(myResolve, myReject) {
//   var x = 0;
//
//
//   if (x == 0) {
//       console.log("inizio");
//     myResolve("OK Promise 3");
//     console.log("fine");
//   } else {
//     myReject("Error Promise 3");
//   }
// });
//
// console.log("continua");
//
// myPromise3.then((val) => {
//     console.log(val);
// },
//
// (err) => {
//     console.log(err);
// });
//
//
// console.log("termina");





//Esempio 4 Metodo then e catch
// var myPromise4 = new Promise(function(myResolve, myReject) {
//   var x = 1;
//
//
//   if (x == 0) {
//       // console.log("inizio");
//     myResolve("OK Promise 4");
//     // console.log("fine");
//   } else {
//     myReject("Error Promise 4");
//   }
// });
//
//
// myPromise4.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err);
// });







//FINE LEZIONE
//FINE LEZIONE
//FINE LEZIONE
//FINE LEZIONE
//FINE LEZIONE









//PROSSIMA LEZIONE
//PROSSIMA LEZIONE
//PROSSIMA LEZIONE

//APPROFONDIMENTO OGGETTI E FUNZIONI

//APPROFONDIMENTO OGGETTI

//definizione get e set in oggetti
var obj = {
    name: "Lorenzo",
    age: 22,

    get eta(){
        return this.age;
    },

    set eta(age){
        this.age = age;
    }
};



//Uguale a usare new Object()
var obj1 = new Object();
obj1.name = "Lorenzo";
obj1.age = 22;
// obj1.altroOggetto = {
//     name: "andrea",
//     congome: "rossi";
// };
//Delete una proprietà
// delete obj1.age;

//to display objects values
var myArray = Object.values(obj1);


//deep object copy
// var persona2 = JSON.parse(JSON.stringify(persona));

//Object Constructor questo fa hoisting mentre class no
function Persona(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function(){
      return this.firstName + " " + this.lastName;
  }
}

var persona3 = new Persona("Paolo", "Rossi", 50, "blu");
var persona4 = new Persona("Paolo", "Rossi", 50, "blu");

// persona4.nationality = "Italy";
// persona4.resCitta = function(){
//     return this.citta;
// };

// console.log(persona3);
// console.log(persona4);

/*Per aggiungere proprietà e metodi a tutti gli oggetti instanziati
da un costruttore di oggetti, bisongna riferirsi al suo prototype*/

Persona.prototype.citta = "Roma";
Persona.prototype.resCitta = function(){
    return this.citta;
};

console.log(persona3);
console.log(persona4);


//APPROFONDIMENTO FUNZIONI
//In JS le funzioni hanno type function, ma in realta sono oggetti
//Si possono istanziare funzioni tramite il costrutto new Function

var myExampleFunction = new Function("a", "b", "return a + b");
console.log(myExampleFunction(2,3));



function myFunction(a, b){
    return arguments.length; //arguments è un oggetto che viene creato automaticamente = Array

}

console.log("numero degli argomenti",myFunction(2,3,4));

function mySum(a, b = 10){
    global_variable = "ciao";

    return a + b;
}

console.log(mySum(10,30));

/* Passare una variabile prende solo il valore e crea una variabile locale come
in altri linguaggi di programmazione, mentre con gli oggetti prende il puntatore
quindi modificare un oggetto all'interno di una funzione passato come parametro
signifa modificare l'oggeto originale*/


/* Una funzione in JS appartiene sempre ad un oggetto, una funzione se dichiarata globalmente
appartiene o ad html o a window*/

console.log(window.mySum(40));



//Call
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1));  // Will return "John Doe"
console.log(person.fullName.call(person2));  // Will return "Mary Doe"





//call with arguments
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1, "Roma", "Italy"));
console.log(person.fullName.call(person2, "Paris", "France"));




//apply
//Uguale a call ma accetta array come parametri
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.apply(person1, ["Roma", "Italy"]));
console.log(person.fullName.apply(person2, ["Paris", "France"]));




//Creare una variabile senza var, let, const, la dichiara sempre a livello globale anche
//se dichiarata all'interno di una funzione!!!!!




function isClass(obj) {
  const isCtorClass = obj.constructor
      && obj.constructor.toString().substring(0, 5) === 'class'
  if(obj.prototype === undefined) {
    return isCtorClass
  }
  const isPrototypeCtorClass = obj.prototype.constructor
    && obj.prototype.constructor.toString
    && obj.prototype.constructor.toString().substring(0, 5) === 'class'
  return isCtorClass || isPrototypeCtorClass
}



//keyword this

//1) in un metodo di un oggetto this si riferisce all'OGGETTO
//2) in una normale funzione e nel global scope this si riferisce all'oggetto globale (window)
//3) in un evento this si riferisce all'elemento html che ha "generato l'evento"


//new keyword
/* 1) crea un oggetto plain, blank
 2) aggiunge al nuovo oggetto la proprietà __proto__ che linka al oggetto prototype del constructor function
 3) this nel costrutto ore viene bindato per riferirsi all'oggetto appena creato
 4)return this se la funzione non ritorna OGGETTI
 */
