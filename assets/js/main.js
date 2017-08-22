var arrayTareas = []; //Arreglo para guardar tareas
console.log(arrayTareas);
var listaTareas = document.getElementById('lista-tareas'); //lista de tareas <ol id="lista-tareas" class="to-do__list"></ol>

//Botones check, edit, delete
var iconTemplate = '<a type="button" class="to-do__button_icon check"><i class="fa fa-check-square-o" aria-hidden="true"></i></a><a type="button" class="to-do__button_icon edit"><i class="fa fa-pencil-square-o" aria-hidden="true" class="to-do__button_icon"></i></a><a type="button" class="to-do__button_icon close"><i class="fa fa-trash-o" aria-hidden="true"></i></a>';


//Función para mostrar las 10 primeras tareas de JSON en una lista. JSON está en el archivo data.js
function mostrarTarea() {
	for (var i = 0; i < 10; i++) {
		arrayTareas.push(res[i]);		
	}

	var mostrar = arrayTareas.forEach(function (element) {
		listaTareas.innerHTML += '<li id="' + element.id + '" class="to-do__li">' + element.title + iconTemplate +'</li>';

		//Añade la clase 'checked' a los elementos con propiedad completed=true
		//Añade la clase 'activo' al botón 'check' de ese elemento
		if (element.completed == true) {
			//console.log(element.completed);
			var p = document.getElementById(element.id);
			p.classList.add('checked');
			document.getElementsByClassName('check')[element.id - 1].classList.add('activo');
		} 
	});

	//Eventos en botones para arrayTareas
	close()
	check();
	edit();

}
mostrarTarea();


//Guardar la tarea ingresada como objeto con atributos: userId, id, title, completed

//Constructor para generar una nueva tarea
function NuevaTarea (userId, id, title) {
	this.userId = userId;
	this.id = id;
	this.title = title.toLowerCase();
	this.completed = false
};

//Función para añadir la nueva tarea con un botón e imprimirla en la lista
function anadirTarea() {
	var userId = 1;
	var id = arrayTareas.length + 1; 
	var title = document.getElementById('tarea').value;
	var completed = false;
	
	if (title == "" || title == null) {
		alert("Ingresa una tarea");
	} else {
		listaTareas.innerHTML += '<li id="' + id + '" class="to-do__li">' + title.toLowerCase() + iconTemplate + '</li>';

		var tarea = new NuevaTarea(userId, id, title, completed);
		arrayTareas.push(tarea);
		console.log(tarea);
		console.log(arrayTareas);
	}

	//Eventos en botones para nuevas tareas
	close()
	check();
	edit();

	//Limpiar input
	clear();
}
	

//Click on close button to delete list item
function close () {
	var close = document.getElementsByClassName('close'); //botón

	for (var i = 0; i < close.length; i++) {
		close[i].setAttribute('data-item-index', i);
		close[i].onclick = function () {
			var li = this.parentNode;
			var icon = this;
			li.style.display = 'none';
			icon.classList.toggle('activo');
			/*
			var index = this.getAttribute('data-item-index');
			console.log(index);
			arrayTareas.splice(index + (i-1), 1);
			console.log(arrayTareas);
			*/
		}
	}
}


//Click on check button to add checked class
function check () {
	var check = document.getElementsByClassName('check'); //botón
	for (var j = 0; j < check.length; j++) {
		check[j].onclick = function () {
			var li = this.parentNode;
			var icon = this;
			li.classList.toggle('checked');
			icon.classList.toggle('activo');
		}
	}
}


//Click on edit button to edit task
function edit () {
	var edit = document.getElementsByClassName('edit'); //botón
	for (var k = 0; k < edit.length; k++) {
		edit[k].onclick = function () {
			var li = this.parentNode;
			var icon = this;
			li.focus();
			li.setAttribute('contenteditable','true');
			li.classList.toggle('editing');
			icon.classList.toggle('activo');
			//li.innerHTML = '<input type="text" id="edit" value="'+ element.title + '" class="to-do__input"><button type="button" onclick="editarTarea(); return false" class="to-do__button_btn"><i class="fa fa-pencil" aria-hidden="true"></i> Editar</button>'
		}
	}
}


//Reset input value
function clear () {
	document.getElementById('tarea').value = "";
}