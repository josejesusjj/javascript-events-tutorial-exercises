window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

//esto es lo que he hecho hasta ahora, si no funciona, puedo eliminar de aqui hacia abajo
let button = document.querySelector("#button2");
button.addEventListener("click", function() {
	let elem = document.createElement("div");
	elem.innerHTML = "<li>"+"hola"+"</li>";
	document.body.appendChild(elem)
})


//let myFunction = document.querySelector("#button2")
//myFunction.addEventListener( e => {
//	alert("#button2");
//})