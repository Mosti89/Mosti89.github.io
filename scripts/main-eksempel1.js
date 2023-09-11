//const myHeading = document.querySelector("h1"); //deklarer en variabel myHeading og tilegner den verdien [object HTMLHeadingElement]
//myHeading.textContent = "Hello world!"; //Legger til tekst som attributt som skal vises på siden. 
/*lager en variabel som heter myHeading og bruker en funskjon som heter querySelector. 
querySelector() gir myHeading inputvariabel h1. Det gjør at myHeader forstår at alle h1 skal gjøres noe med.
Deretter tar den variabelen myHeader og tilegner teksten "Hello world!"
Når html dokumentet kjøres da så kalles main.js fila opp og dette kjøres, da endres alle h1 til "Hello world!"
*/


let myButton = document.querySelector("button"); //Søker gjennom html dokumentet etter en "knapp" og lagrer verdiens dens i myButton variabelen.
let myHeading = document.querySelector("h1"); //Søker gjennom html dokumentet etter alle h1 og tilegner veriden til myHeading.

/*Funksjon som setter brukers navn. skrive inn et navn, ikke tillatt og la navnefeltet stå tomt.*/
function setUserName() { 
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

/*Tester for: Hvis IKKE name er lagret i nettleser så kjør setUserName() funskjonen*/
if (!localStorage.getItem("name")) {
    setUserName();
} /*Ellers last "name" til nettleser og lagre dette i storedName, deretter skriv "Mozilla is cool, (verdien i storedName)*/
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
/*Dersom det klikkes på knappen så kjør setUserName() funksjonen. */
myButton.onclick = () => {
    setUserName();
  }

document.write("The stores value in myVarible is: ") // Dette er det samme som printf() i C-språket. 
document.write(myVariable); //Over printer jeg en tekst og her viser jeg verdien i myVaribale, dette er verdien lagret og ikke teksten som skal vises.

let iceCream = "chocolate"; //Setter en variabel kalt "iceCrem" og blir lastet stringen "chocolate"
if (iceCream === "chocolate") { //Tester på om iceCream har stringen "chocolate" i seg
    alert("Yay, I love chocolate ice cream!"); //Hvis ja. skriv det der. Det skrives som et lite vindu før innlastning av siden oppe ved fanen. 
} else { // og må klikkes bort før nettsiden laster inn. 
    alert("Awwww, but chocolate is my favorite…"); // Ellers skriv det der.
}

function multiply(num1, num2) { //Lager en funksjon som tar imot to verider og multipliserer de og returnerer resultatet. 
    let result = num1 * num2;
    return result;
}

document.write(" The multiplication of the two values given is ", [multiply(5, 3)]); // skriver til dokumentet en tektst i "...", etterfulgt av oppkalling av funksjonen og gir to verdier. 

// document.querySelector("html").addEventListener("click", function () {alert("Ouch! Stop poking me!");}); 
//queryselector velger html elementet og vi lager en fuksjon som heter addEventListner. Denne funksjonen tar imot navnet på eventet den skal lytte på. 
//Altså "click" og deretter kjører en navnløs funskjon som kan sees som "function ()", i denne skal det vises et varselvindu med teksen "Ouch! Stop poking me!"


document.querySelector("h1").addEventListener("click", () => {alert("Ouch! Stop poking me!");});
// Akkurat det samme skal skje her, men isteden for en navnløs funksjon så bruker vi pil metoden....("click" () => {"Teksten her"} )

