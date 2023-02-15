console.log("jeg er i setbackgroundcolor")  //erik sætter dette først i js filer så man kan se i browseren
//om man er i den rigtige fil

//start med const
const input = document.querySelector(".inputColor") //husk punktum pga class
console.log(input)

const buttonSetColor = document.querySelector(".buttonSetColor")
console.log(buttonSetColor)

const colorpicker = document.querySelector(".colorpicker")
console.log(colorpicker)

function setBackgroundcolor(e){
    const body = document.querySelector("body") //får fat i body tag her. I query selector
    let color = input.value
    console.log(color)
    console.log(e) //udskriver til browser console under inspect
    //keyboard event ved at noget skrivesi feltet
    //pointerevent når button trykkes, det er objekter, de indeholder en masse ting, fx det html element der aktieres
    body.style.backgroundColor = color //style til at ændre ting på html elementet, css keywords
}

buttonSetColor.addEventListener('click', setBackgroundcolor) //husk ingen paratenser på funktionens
//navnet for ellers kaldes funktionen dér frem for at eventet trigger det
//det der sker: knaps class "lyttes til"
//click er tryk på knap event, kaldes på button
input.addEventListener('keyup', setBackgroundcolor)
//keyup betyder man skal bare skrive farve i feltet så ændres det med det samme
//når der trykkes på en eller anden knap så sker et event
//keyup er tryk på tastaturknap event, kaldes på inputfeltet

//hexadecimal et decimal er 4 bit, et f er 4 bit fx, ff00ff er

//fejl i intellij konsol som siger at den ikke kan finde document betyder ikke noget, det er bare
//fordi man skal køre html dokumentet og ikke js filen

function setBackgroundColorPicker(e){
    const body = document.querySelector("body") //bør nok stå uden for funktionen
    let color = colorpicker.value
    console.log(color)
    console.log(e)
    body.style.backgroundColor = color
}

colorpicker.addEventListener('input', setBackgroundColorPicker)
//med change skulle man klikke for at ændre farven, med input skifter
//den løbende farve når du holder musen nede

//i morgen: myql i docker og læg det på azure
