//javascript laver en masse julelege bag om ryggen på en fordi det er typeless, uden type

function out(s) {console.log(s)}

let a = 5 //man behhøver ikke lave semi-kolon i js, men man kan gøre det
console.log(a)

console.log("hej" + 5)
//det her kan man også gøre i java
//i gamle dage er + en del af en metode i strengen, i js er + en del af maskinen der køre det

console.log(5 + "hej") //dette kan ikke gøres i java. Man kan ikke lægge en streng til et tal
//men her går det fint

console.log("hej" - 5)
//den crasher ikke, giver NaN - not a number. Man får ikke compilerfejl, den køre bare videre
//NaN (sin egen type, kinda som null) kan derfor bruges videre i beregninger og give underlige svar, så hvis
//man får underlige tal så er det måske det her

out("jeg er i out" + 4>5) //bliver til streng4 > 5 og venstresiden er NaN som er mindre end 5, false
//erik gør det her med at lave en funktion til console.log()
//her udskrives kun false og ikke strengen. Den expression er kun false så hvis man bruger dette
//i en if giver det noget hetl andet end forventet
//  det er det fordi strengen bliver "jeg er i out 5" > 5 = false
out("j">5) //muligvis sammenligner den ascii værdier her

//hav tungen lige i munden når man sammensætter typer i js
//dette sker fordi js er typeless

//skriv ting ud i konsollen for at teste om man nu får det resultat man vil have
//js hjælper en mindre end java

const c = "hej" //const kan ikke ændre værdi senere
const d = 5
let f

if (c>d){
    out("c større end d")
}
if (c){ //man kan lægge hvilken som helst type i if. Det er ikke tydeligt om noget giver true eller false
    out("c er noget")
}

out(f) //giver ingen exception, udskriver undefined, ala NaN og null
//js laver selv udefineret variabler til typerne^^

let g = null
out(g) //udskriver null

//linjeskift er et semikolon
if (f) out("jeg er undefined")
if (g) out("jeg er null") //begge er false fordi de er null og undefined så derfor udskrives de ikke
// det er dog ikke tydeligt og man finder ikke ud af det fordi den ikke giver exception

//i arrays kan alt blandes
//tuborgparantes laver objekt, key value pair
let arr = [5, 5.5, "hej", 5>4, f, g, true, [1, "arr2"], {"anna": 5}, 0/0] //sidste giver NaN

arr.forEach(out) //udskriver alle indexes
arr.forEach(s => console.log(s)) //=> lambda, udskriver det samme som linjen ovenover
//s => console.log er en anonym funktion, den har en parameter s som peger på hver index,
//højresiden er en funktion

const m = 9999999999999999999999999999999999
const n = 9999999999999999999999999999999999.5
console.log(m ==n) //er true fordi den ikke kan håndtere så store tal

const lk = 0.1
const jk = 0.2
const gh = 0.3

console.log(gh == lk+jk) //false fordi noget meed bit ikke fungerer og fordi js er typeless
console.log(0.1+0.2) //rounding error




