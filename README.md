# Lista de Tareas con Javascript

Lista de tareas (To Do List) con javascript usando arreglos, objeto constructor y eventos. Se pueden añadir nuevas tareas a la lista y cada tarea se puede para checkear, editar y eliminar.

  * Cada tarea es un elemento de una lista y se guarda en un arreglo
  * Las diez primeras tareas mostradas se encuentran en el archivo data.js (JSON)
  * En el input se pueden ingresar nuevas tareas que se guardarán en un arreglo y se mostrarán en la lista
  * Cada tarea ingresada se genera como un objeto constructor con atributos: userId, id, title, completed
    * el valor de userId es 1, para todas las tareas
    * title es el nombre de la tarea y corresponde al valor ingresado al input
    * el id se genera con la suma del número de elementos de cada array
    * completed es false por defecto 

[demo](https://paulaponce.github.io/lista-tareas)