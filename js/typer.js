//om typer

//syv primitive typer (3+2+2)
//Number, String, Boolean  - NaN er af typen Number
//Undefined, Null
//Symbol, BigInt - bruger vi ikke

//alt matematisk som sker med NaN vil give et NaN. Er et problem når man ikke ved at NaN indgår i beregninger

//der er yderligere to typer, de er ikke primitive
//object, function
//array og null er object

//funktion som viser typen på hver element
function showTypes(lst){
    console.log("starter udskrivning")
    //gammeldags for loop i js:
    for(const obj of lst){ //ligner for each loop i java
        console.log(obj + " er af typen: " + typeof obj) //typeof er et keyword/funktion
    }
}

const a = 5.5
const arr = []
arr.push(a) //push er en metode i array. Array i javascript er ala arrayliste i java. array er af typen object
arr.push(0/0)
showTypes(arr) //kalder vores egen funktion showTypes
console.log(arr[0]) //har arra funktioner som indexOf

const arr2 = [1, 3]
arr.push(arr2)
showTypes(arr)

let f
arr.push(f)
let g = null
arr.push(g)
arr.push("hej" + 0/0)
showTypes(arr)

//javascript har ikke generics fordi man i forvejen kan putte alt ind
//ham der lavede javascript lavede det kort efter java var lavet of er måske blevet inspieret en del
//kaldes JAVAscript nok pga marketings årsager


