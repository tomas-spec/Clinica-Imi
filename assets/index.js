et js = "amazing";
if (js === "amazing") alert("Javascript is FUN!");

//El console log

console.log(40 + 19 + 8 - 9);
//Valores y variableis

//let firstName="tomas"
//console.log(firstName);

//
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//const firstName = "Jonas";
//const lastName = "Duran";

//console.log(firstName + ' ' +lastName);
//operadores
let x = 10 + 5; //15
x *= 10; // multiplica x 10 a X
x += 3; // suma 3 a x

console.log(x);

//Comparadores
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);
//Clase 14
let t, y;
t = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

//Clase17 Cadenas y literales
/*
const firstName= "Tomas";
const job = "teacher";
const birthYear = "2000"
const year = 2037;
const tomas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(tomas)
*/
//Se puede usar tambien ``

/*const tomasNew = `I'm ${firstName}, a ${year -birthYear} year old ${job}!`
console.log(tomasNew)

//Tambien se puede usar asi tambien
console.log(`Buenasssss`)


//Escribe x debajo
console.log(`String
multiple
lines`);

//Clase 18
const edad = 15;

if (edad >= 19) {
    console.log('Sarah can start driving license 🚗')
} else{
    const yearsLeft = 18 - edad;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}
//otro ejemplo con century

const birthYear = 2012;
let century;
if (birthday <=2000){
century = 20
} else{
    century = 21
}

console.log(century)


*/
//Conversion de tipos
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("tomas"));
console.log(typeof NaN);

console.log(String(23), 23);

//tipo coercion
console.log("I am " + 23 + " years old");

//Booleanos

const money = 100;
if (money) {
  console.log("dont spend it all");
} else "You should get a job";

//Comparadores de igualdad
const age = 18;
if (age === 18);
console.log("You just became an adult");

const swiper = new Swiper(".swiper-hero", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: ".swiper-scrollbar",
  },*/
});