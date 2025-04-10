// const = a variable that can't be change\

/*let pi = 3.14159;  // not secure!
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle:")
radius = Number(radius);

circumference = 2 * radius * pi;

console.log(circumference);
*/


const PI = 3.14159;  //const cannot be change
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function() {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * radius * PI;
  document.getElementById("myH3").textContent = `The circumference is: ${circumference}`;
}