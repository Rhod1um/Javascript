// const let var
//se fronter om artikel med const let var

//det er de 3 keywords til tildeling af variabler
//keyword - official term åbenbart

//const a  - giver fejl, const skal tildeles med det samme
const a = 5
//a = 7  - må man ikke
let b = 6 //let kan pege på hvad som helst, obj, funktion, primitiv osv
b = "hej"
console.log(b)

//const og let kom først i ~2015, 2 år efter js blev lavet
//den originale var var eller ingenting
var c = 5.5
//nogle steder må man ikke bruge var, en censor kan blive sur over det
//var er nu gammel kode. Det har noget at gøre med scope


function testScope() { //scope gymnastik
    let a1 = "xjeg er lokal"
    var v1 = "jeg er lokal"
    if (a1>v1){
        let a2 = "a1 var større end v1"
        console.log(a2)
        if (3==3){
            let a3 = 3
            var v3 = 3.3
            console.log("3=3")
        }
        //console.log(a3) - kan man ikke
        console.log(v3) //kan man godt, var er i det globale scope, kan også ses i andre js filer
        //scopes: global, funktionsscope, blok scope. Der er også moduler
        //var kan ses uden for det lokale sope her, men ses ikke uden for funktionen.
        //dvs den ses uden for blokscope men function scope virker
    }
}

testScope() //nu er der parantes på funktionen
//console.log(a2) //a2 er i funktionens if's scope, derfor kan vi ikke se den herude
//console.log(v1) //var er også i den mindre scope
//console.log(v3) - kan ikke
//^^function scope virker
//let blev lavet senere så man undgik at var har besvær med scope





