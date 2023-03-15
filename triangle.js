// function handleTriagleForm() { 
//   event.preventDefault();
//   document.querySelector("response").innerText = null;
//   const lenth1 = parseInt (document.querySelector("lenth1").value);
//   const lenth2 = parseInt (document.querySelector("lenth2").value);
//   const lenth3 = parseInt (document.querySelector("lenth3").value);
//   const response = triangle.checkType();
//   const pTag = document.createElement("p");
//   pTag.append(response);
//   document.querySelector("response").append(pTag);
// }

function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;

}

Triangle.prototype.checkType =function() {
  return "can't answer yet!";
}