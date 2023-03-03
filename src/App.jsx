import "./App.css";


import { useState } from "react";

import AppUi from "./components/AppUi/AppUi.jsx";

const defaulTodos = [
  { text: "Aprendiendo React", completed: false },
  { text: "Jugar con los niños", completed: false },
  { text: "Leer mi libro de la semana", completed: false },
  { text: "Jugar futbol", completed: false },
  { text: "Jugar futbol con nietos", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaulTodos); //Se guardan datos del objeto defaulTodos en el useState

  const [searchValue, setSearchValue] = useState(); //Se captura valor del input para hacer busqueda

  const completedTodos = todos.filter((todo) => todo.completed == true);//Consultar cuantos todo estan completados

  const totalTodos = todos.length; //Total todos

  let searchedTodos = [];

  //Realiza busqueda de todo con respecto al valor del imput, en caso de estar vacio entrega todos los todos, de lo contrario convierte datos a minuscula y busca en todos los todos por letra ingresada
  if (searchValue == undefined) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  //funcion todos completados, necesita como parametro el texto del todo, este será el identificador de busqueda
  const completeTodos = (text)=>{

    //en todoIndex quedará guardada la posición (indice) del todo que contenga el mismo texto que ingresa como parametro en al función
    const todoIndex = todos.findIndex(todo=> todo.text === text);

    //nuevo arreglo con el todos desestructurado
    const newTodos = [...todos];

    //Se modifica la propiedad completed a "true" con el indice encontrado
    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }

    //Se actualiza el todos principal
    setTodos(newTodos);

  }

   //funcion todos eliminar, similar a completados
   const deleteTodos = (text)=>{

    //en todoIndex quedará guardada la posición (indice) del todo que contenga el mismo texto que ingresa como parametro en al función
    const todoIndex = todos.findIndex(todo=> todo.text === text);

    //nuevo arreglo con el todos desestructurado
    const newTodos = [...todos];

    //Se modifica la propiedad completed a "true" con el indice encontrado
    newTodos.splice([todoIndex], 1); 
    console.log("eliminar");

    //Se actualiza el todos principal
    setTodos(newTodos);

  }


  //se envían todas las props necesarias
  return (
    <>
    <AppUi 
    totalTodos={totalTodos} 
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue= {setSearchValue} 
    searchedTodos ={searchedTodos}
    completeTodos = {completeTodos}
    deleteTodos = {deleteTodos}
    />
    </>
   
  );
}

export default App;
