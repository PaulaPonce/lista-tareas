//función para mostras las 10 tareas de JSON. JSON está en data.js
function mostrarTarea(){
	var tareas10 = res.forEach(function(element){
		document.write('<ul><li>' + element.title + '</li></ul>'); //tares en una lista
		//document.getElementById('cont-tarea').innerHTML = element.title + "<br>";
	});
}
mostrarTarea();

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

