var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");
// IT MUST BE NOTED IN THE ABOVE THAT WHEN WE USE document.querySelector(".classname or #IDname or the html componentName")
// inside the paranthesis or the arguments have to be specified with the token of the component identification 
// or nothing if it s just an HTML component.

function setGradient(){
 body.style.background ="linear-gradient(to right,"+color1.value+","+color2.value+")";   
 css.textContent = body.style.background+";";
}

color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)

