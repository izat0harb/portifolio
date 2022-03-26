var landingpage = document.querySelector('.home');

var imgsArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
];

setInterval ( () =>{
    var randomNamber = Math.floor(Math.random() * imgsArray.length);
    home.style.backgroundImage = 'url("img/'+imgsArray[randomNamber]+'")';
},5000);


