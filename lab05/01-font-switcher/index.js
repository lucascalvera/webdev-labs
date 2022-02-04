let fontSize = 1.4

const makeBigger = () => {
   fontSize += 0.2
   setFontSize();
   //console.log(window.getComputedStyle(document.getElementsById("abc")).getPropertyValue("font-size"), "is the font size")
   //console.log(document.querySelector(".content").style.fontSize)
   //`${}` for JS equivalent to {{}} in FLASK
   //alert('make bigger!');
};

/* above "arrow function" is equivalent to function below
function someName() {
   fontSize += 0.2
   document.querySelector(".content").style.fontSize = `${fontSize}em` :
}
*/

const makeSmaller = () => {
   fontSize -= 0.2
   setFontSize();
   //alert('make smaller!');
};

const setFontSize = () => {
   document.querySelector(".content").style.fontSize = `${fontSize}em` ;
   document.querySelector("h1").style.fontSize = `${fontSize+0.6}em` ;
}

// ; are optional in JavaScript
// console.log() is equiv to a print statement.

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);



/*
var varA - declare a variable
let varA=1 - declare & initialize variable
const varA=1 - declare & initialize variable and cannot be changed.

*/

