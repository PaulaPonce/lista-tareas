//función para mostras las 10 tareas de JSON. JSON está en data.js
function mostrarTarea(){
	var tareas10 = res.forEach(function(element){
		document.write('<ul><li>' + element.title + '</li></ul>'); //tares en una lista
		//document.getElementById('cont-tarea').innerHTML = element.title + "<br>";
	});
}
mostrarTarea();
/*
var tareas = [];
var nuevaTarea = document.getElementById('cont-nuevaTarea');

//constructor para generar una nueva tarea
function NuevaTarea(userId, id, title, completed){
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed;
};

//método para imprimir la nueva tarea en html 
NuevaTarea.prototype.toHTML = function(){
	var html = " ";
	html += this.id + "<br>";
	html += this.title + "<br>";
	html += this.completed + "<br>";
	return html;
}

//función para guardar nuevas tareas en el arreglo tareas
function mergeHTML(){
	var html = "";
	for(var i = 0; i < tareas.length; i++){
		html += tareas[i].toHTML();
	}
	return html;
}

//función que imprime la tarea
function printHTML(html){
	nuevaTarea.innerHTML = "";
	nuevaTarea.innerHTML = html;
}

//var addTarea = document.getElementById('tarea');
function anadirTarea(){
	var userId = 1;
	var id = prompt("id");
	var title = document.getElementById('tarea');
	var completed = prompt("c");
	var tarea = new NuevaTarea(userId, id, title, completed)
	tareas.push(tarea);
	printHTML(tarea.toHTML());
}

*/
function anadirTarea(){
	var title = document.getElementById('tarea').value;
	document.getElementById('cont-nuevaTarea').innerHTML = '<ul><li>' + title + '</li></ul>';
}