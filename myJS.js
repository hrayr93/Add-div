/*let box = document.querySelector("#box"),
btn = document.querySelector("button");

let width = box.clientWidth;
	height = box.clientHeight;

	
/*let width = box.offsetWidth;
	height = box.offsetHeight;
*/
/*let width = box.scrollWidth;
	height = box.scrollHeight;*/

/*	console.log(width);
	console.log(height);
	console.log(box.getBoundingClientRect().left);

	console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

btn.addEventListener("click",function(){
	box.scrollTop = 0 ;
});
scrollBy(0,200); // (X,Y) sharjel 200 y koxm;
scrollTo(0,300);

*/


//construction	
/*function User(name,id){
	this.name = name;
	this.id =id;
	this.human = true;

	this.hello = function(){
		console.log("hello " + this.name);
	}
}

User.prototype.exit = function(name){
	console.log("user " + this.name + " exit");
}

let ivan = new User("ivan",25),
	alex = new User("alex",26);

	console.log(ivan);
	console.log(alex);

 ivan.exit();
*/
/*"use strict";
function showThis(a,b){
	console.log(this);

	function sum(){
		console.log(this);
		return a + b;
	}

	console.log(sum());
}

showThis(4,5);
showThis(6,8);

*/
//2
/*let obj = {
	a:20,
	b:15,
	sum:function(){
		console.log(this);

		function shout(){
		console.log(this);
	}
	shout();
	}


}

obj.sum();
*/

//4
/*
let user = {
	name:"Jone",

};

function sayName(surname){
	console.log(this);
	console.log(this.name + surname);
}

console.log(sayName.call(user,"String"));		//страка
console.log(sayName.apply(user,["array"]));		// массив

function count(number){
	return this * number;
}


let double = count.bind(2); //this  ето аргумент bind ; 

console.log(double(3));
console.log(double(10));
*/

//---------

/*let btn  = document.querySelector("button");
btn.addEventListener("click",function() {
	console.log(this);
	this.style.backgroundColor = "red";
	function showThis(){
		console.log(this);
	}
	showThis();
})*/


//1 просто вызов function контекст вызова window/undefined ("use strict")
//2 метод обьекта -this  = обьект;
//3 конструктор (new) -this = новый создоный обьект;
//4 указания конкретново контекста -call,apply,bind ;


// learn 2


/*let age = document.getElementById("age");

function showUser(surName,name) {
    alert(`Пользователь ${surName}  ${name}  его возпаст ${this.value}`);
}
showUser.apply(age,["gr","hrayr"]); // showUser.call(age,"gr","hr");*/

//---


/*
function makeArr() {
    var items = [];
    for (let i=0;i<10;i++){
        var item = function () {
            console.log(i);
        }
        items.push(item);
    }

    return items;
}

var arr = makeArr();

arr[1]();
arr[3]();
arr[7]();

let fun = () =>{
  console.log(this)
};
fun();


let obj = {
    number:5,
    sayNumber:function () {
        let  say = ()=>{
            console.log(this);
        };
        say();
    }
}

obj.sayNumber();
//---
let btn = document.querySelector("button");
btn.addEventListener("click",function () {
    let show = ()=>{
        console.log(this);

    };
    show();
});
//------
function calcOrDouble(number,basis = 2) {
    //basis = basis || 2; //es5
    console.log(number * basis);
};
calcOrDouble(3,5);
calcOrDouble(6);

class Rectangle {
    constructor (height,width = 20){
        this.height = height;
        this.width = width;
    }

    calcArea (){
        return this.height * this.width;
    }
}


const square = new Rectangle (10,10);

console.log(square.calcArea());

//--

let video = ["youtube","vimeo","rutube"],
    blogs = ["wordpress","livejurnal","blogger"],
    internet = [...video,...blogs,"vk","facebook"];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+ b + c);
}
let  numbers = [2,5,7];

log(...numbers);
*/

/*
//--- learn 1
let arr = [5, 2, 3, 0, 6, 4, 8];

function findNum(a, K) {
    let result = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === K) {
            result = true;
            break;
        }

    }
    return result ? 'YES' : 'NO'
}

findNum(arr, 25);
*/
/*

 //------  learn  2

function oddNum(a,b) {
    let arrayOdd = [];
    for (let i = a;i<=b;i++){
        if (i%2 == 1){
            arrayOdd.push(i);
        }
    }
    return arrayOdd;
}
oddNum(2,13);

*/


/*
//find number max
let array = [13, 2, 45, 6, 4, -2];

function findNum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;

}


function product(arr) {
    let productNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        productNum *= arr[i];
    }
    return productNum;
}

console.log(findNum(array));
console.log(product(array));


//-------

function minX(arr) {
    let sum = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (min > sum) {
            min = sum;
        }
        console.log("-- ", sum);
    }

    return ((-1) * min) + 1;
}

function testMinX(x, arr) {
    sum = x;
    console.log("xx ", sum);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log("xx ", sum);
    }
}

let mm = minX(array);
console.log("minX:", mm);
console.log("TEST:");
testMinX(mm, array);


//-------------- object
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function () {
        console.log("hello " + this.name);
    };
}

User.prototype.exit = function (name) {
    console.log(this.name + " exit");

}


let ivan = new User("ivan", 25),
    alex = new User("alex", 26);

console.log(ivan);
console.log(alex);

ivan.exit();

//---- object JSON

let optionMy = {
    width: 1366,
    height: 768,
    background: "red",
    font: {
        size: "16px",
        color: "#fff"
    }
};

//console.log(JSON.stringify(optionMy));
console.log(JSON.parse(JSON.stringify(optionMy)));

*/
// ------------------------------------------------------------------

/*let options = {
    width: 1366,
    height: 768,
    background:"red",
    font:{
        size:'16px',
        color: '#fff'
    }
};
 console.log(JSON.stringify(options)); //obj -> JSON
 console.log(JSON.parse(JSON.stringify(options))); // JSON -> obj
*/
//----AJAX
/*
let inputRub = document.querySelector("#rub"),
    inputUsd = document.querySelector("#dollar");

inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();

    //request.open("method","url","async","user","password");
    request.open("GET", "server.php");
    //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    request.addEventListener("reaydstatechange",function () {
        if (request.readyState === 4 && request.status ==200 ){
           console.log( request.response);
        }
       });

    request.send();
});*/


//---- ajax on div #form POST metod


let formDiv = document.querySelector("#form"),
    inputDiv = formDiv.getElementsByTagName("input");


formDiv.addEventListener("submit", function (event) {
    event.preventDefault();

    let divForm = new XMLHttpRequest();

    divForm.open("POST", "server.php");
    divForm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    let newObj = new FormData(formDiv);


    divForm.send(newObj);

    for (let i = 0; i < inputDiv.length; i++) {
        inputDiv[i].value = "";
    }


});


//---- ajax on div #form GET metod

/*
let a=0,b = 0;
(function func(){
    var a = 1;
    b = 2;
})();
console.log(a,b);*/


//

/*var a = {
    b:1,
    c: function () {
        console.log(this.b);
    }
}

 var foo =a.c;
foo();*/

/*//promise


  let drink = 1;
function shoot(arrow, headshot, fail) {
    console.log("Вы сделали выстрел...");

    setTimeout(function () {
        Math.random() > .5 ? headshot({}) :  fail("вы промахнулись ")
    },3000)
};

function win(){
    console.log("вы победили!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("вам купили пиво");
}

function giveMoney() {
    console.log("дали дениг");
}
function loose(){
    console.log("вы проиграли!");
}

shoot({},
    function (mark) {
        console.log("вы папали в цель!");
        win(mark,buyBeer,giveMoney);
    },
    function (miss) {
        console.error(miss);
    loose();
}

);*/



/*  // PROMISE
let drink = 1;

function shoot(arrow) {
    console.log("вы делали выстрель...");

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("вы прамахнулись!");
        }, 3000);

    });

    return promise;
}

function win() {
    console.log("Вы победили! ура ура !!!");
    (drink === 1) ? buyBeer() : givMoney();
}

function buyBeer() {
    console.log("Купили пиво");
}

function givMoney() {
    console.log("Вам дали денги");
}

function loose() {
    console.log("Вы проиграли");
}

shoot({})
    .then(mark => console.log("вы папали в цель!"))
    .then(win)
    .catch(loose);
*/
// checkbox chacked
let checkboxForm = document.querySelector(".checkbox"),
    bodyBackGround = document.querySelector("body"),
    formBg = document.querySelector("#form"),
    changeBtn = document.querySelector(".change");

checkboxForm.addEventListener("click", function () {

    if (checkboxForm.checked == true) {
        checkboxForm.style.background = "#03a9f4";


    } else {
        checkboxForm.style.background = "#c6c6c6";

    }


       if (localStorage.getItem("isChecked") === true){
           checkboxForm.checked = true;
           checkboxForm.style.background = "#03a9f4";

       }
    localStorage.setItem("isChecked",true);

});

changeBtn.addEventListener("click", function () {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    formBg.style.backgroundColor = "#" + color;

});


//   localStorage
/* localStorage.setItem("number",1); // добавляет элемент
console.log(localStorage.getItem("number")); // получения элемента
localStorage.removeItem("number"); // удаляет  элемент
localStorage.clear(); // удалить все элементы
*/

// try catch
let json ='{"id" : 2}'

 try{
     let user = JSON.parse(json);
     console.log(user);
     if(!user.name){
         throw new Error ("в этом данных нет имени");
     }

 }catch(err){
     console.log(err.name);
     console.log(err.message);
     console.log(err.stack);


     console.log(`мы получили ошыбку : ${err.name}`);
 }

console.log(`А я буду работать!`);



