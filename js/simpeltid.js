const fruits = ["æbler", "pærer", "bananer", "juice"] //gåseøjne og enkelt apostrof er det samme

function myFunc1(item) { //html side er et DOM træ, man kan få fat i enkelte html elementer og tilføge og fjerne
    const ptag = document.getElementById("demo")
    console.log(ptag)
    ptag.innerHTML += item + "<br>"; //+= betyder "tilføj", html del skal være o gåseøjne
    //skriver man document så har man fat i html DOM træet
}

function myFunc2(item, index){
    const ptag = document.getElementById("demo")
    ptag.innerHTML += "<br>" + index + " : " + item
}

fruits.forEach(myFunc2) //når funktionen kaldes lægger man ikke et argument ind
//for js ved det automatisk, i forEach ved den at det funktionen peger på er indexpladser