/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (event) => {
   var theme = event.target.id;

   if (theme=='default') {
      document.querySelector("body").className = "";
   }
   else {
      document.querySelector("body").className = theme;
   }
}


document.querySelector("#ocean").addEventListener('click', changeTheme);
document.querySelector("#desert").addEventListener('click', changeTheme);
document.querySelector("#default").addEventListener('click', changeTheme);
document.querySelector("#high-contrast").addEventListener('click', changeTheme);



/*
const changeThemeOcean = (event) => {
   console.log(event);
   document.querySelector("body").className = "ocean";
   var theme = event.target.id; // theme button id name
   if (theme=='default'){
      document.querySelector("body").className = "";
   }
   else {
      document.querySelector("body").className = theme;
   }
}

const changeThemeDesert = () => {
   document.querySelector("body").className = "ocean";
}

const changeThemeHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

const changeThemeDefault = () => {
   document.querySelector("body").className = "high-contrast";
}

// use # when you're referring to an id.
// use . when you're referring to a class
// just tag name when 

document.querySelector("#ocean").addEventListener('click', changeThemeOcean);
document.querySelector("#desert").addEventListener('click', changeThemeDesert);
document.querySelector("#high-contrast").addEventListener('click', changeThemeHighContrast);
document.querySelector("#default").addEventListener('click', changeThemeDefault);

// when you call changeThemeOcean, you are actually passing an object (event)

function changeThemeDefault(event) {

}
*/
