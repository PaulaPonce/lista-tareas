//función para mostras las 10 tareas de JSON en una lista. JSON está en el archivo data.js
function mostrarTarea(){
	var tareas10 = res.forEach(function(element){
		document.getElementById('cont-tarea').innerHTML += '<ul><li>' + element.title + '</li></ul>';
	});
}
mostrarTarea();

//para guardar la tarea ingresada como objeto con atributos: userId, id, title, completed
var tareas = []; //aquí se guardaraon las nuevas tareas
var nuevaTarea = document.getElementById('cont-nuevaTarea');

//constructor para generar una nueva tarea
function NuevaTarea(userId, id, title, completed){
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed
};

//función para guardar las nuevas tareas ingresadas al input en el arreglo tareas
function guardarTarea(){
	var html = "";
	for(var i = 0; i < tareas.length; i++){
		html += tareas[i].toHTML();
	}
	return html;
}

//función para añadir la nueva tarea con un botón e imprimirla
function anadirTarea(){
	var userId = 1;
	var id = prompt("Ingresar número de la tarea: ");

	var title = document.getElementById('tarea').value;
	nuevaTarea.innerHTML += '<ul><li>' + title + '</li></ul>';

	var completed = prompt("Ingresar estado de la tarea \n(true si está completa, false si está incompleta");
	var tarea = new NuevaTarea(userId, id, title, completed);
	tareas.push(tarea);

	anadirTarea(tarea.toHTML());
	anadirTarea(guardarTarea());	
}

/*
function anadirTarea(){
	var title = document.getElementById('tarea').value;
	document.getElementById('cont-nuevaTarea').innerHTML += '<ul><li>' + title + '</li></ul>';
}
*/