//operator

let a = 1;
console.log(a++)//giver 1 fordi den udskriver først og lægger +1 til bagefter
console.log(a) //giver 2
console.log(++a) //giver 3

let b = 2
console.log(b**8) //b⁸
//bit, hexa, et f er 4 bit. 8 bit = 256
console.log(b**24) //16777216 så mange farver i hex er der

console.log(b**3+2) //giver b³ +3 = 2*2*2 + 2 = 10
//paranteser har højeste precedence
//se link på fronter hvor der er tabel over precedence over operatorer
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//unary minus: let a = -1 - unary har højeste precedence
//binary minus: let a = 2 - 3 - minusset tager to tal/argumenter
//fleste opratore er left to right. Få exceptions som **
console.log(b**-3) //- unary har højeste precedence

// == equality,  === strict equality

//left to right: (25-10)-5
console.log(25-10-5) //ligegyldigt når et er plus men ikke minus

let x, y
x = y = 25 - 10 -5
console.log(x, y)
//typeof kommer før operatorer

let minus = -1
let plus = 5
console.log(minus)
console.log(typeof +"a") // +"5" er number, +"a" er number her, men nedenunder er NaN
let ascii = +"b"
console.log(ascii) //NaN

console.log(typeof 5 + "5") //number5
console.log(typeof typeof 5) //giver string fordi typeof (typeof 5) = number (strin)

if (typeof +"5" == "number") console.log('+"5" er et nummer') //test udtryk

console.log(("4" + 1) > (4+1)) //true fordi "4"+1 er 41 i ascii
//> operator er "hidsige" - erik

console.log("4" == 4) //true
console.log("4" === 4) //false
