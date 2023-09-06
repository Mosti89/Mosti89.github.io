const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
      myImage.setAttribute("src", "images/image-2.png");
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  };


let myButton = document.querySelector("button"); //Søker gjennom html dokumentet etter en "knapp" og lagrer verdiens dens i myButton variabelen.
let myHeading = document.querySelector("h1"); //Søker gjennom html dokumentet etter alle h1 og tilegner veriden til myHeading.

/*Funksjon som setter brukerens navn.
function setUserName() { //Funskjonnavnet
    const myName = prompt("Please enter your name."); //Deklarer myName = viser en tekst og tar imot input fra bruker
    localStorage.setItem("name", myName); //Lagrer inputen i nettleseren og navngir det med "name".
    myHeading.textContent = `Mozilla is cool, ${myName}`; //Til header så legger vi teksten "Mozilla is cool, (veriden i myName)".
}*/

/*Samme som over bare at her MÅÅÅÅ man skrive inn et navn, ikke tillatt og la navnefeltet stå tomt.*/
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
  };




  