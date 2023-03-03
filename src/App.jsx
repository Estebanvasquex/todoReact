import "./App.css";

import { useState } from "react";

import AppUi from "./components/AppUi/AppUi.jsx";


function App() {


  //Persistencia
  //consultar el local storage 
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  //verfiicar si local storage tiene todos
  if(!localStorageTodos){
    //Se le envía un array vacio a local storage
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    //Se convierte en objeto y se pasa a la variable
    parsedTodos = JSON.parse(localStorageTodos)

  }

  const [todos, setTodos] = useState(parsedTodos); //Se guardan datos del objeto defaulTodos en el useState

  const [searchValue, setSearchValue] = useState(); //Se captura valor del input para hacer busqueda

  const completedTodos = todos.filter((todo) => todo.completed == true); //Consultar cuantos todo estan completados

  const totalTodos = todos.length; //Total todos

  const confirmDelete = false;

  let searchedTodos = [];

  //Realiza busqueda de todo con respecto al valor del imput, en caso de estar vacio entrega todos los todos, de lo contrario convierte datos a minuscula y busca en todos los todos por letra ingresada
  if (searchValue == undefined) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }


  //Guarda objeto convertido a texto en local storage y actualiza el estado setTodos(newTodos) con el nuevo objeto
  const saveTodosLocalStorage = (newTodos)=>{
    //Se cambia de objeto a texto y se guarda en la variable 
    const stringifiedTodos = JSON.stringify(newTodos)

    //Pasamos la varible con el texto a local storage
    localStorage.setItem('TODOS_V1', stringifiedTodos);

    setTodos(newTodos)

  }


  //funcion todos completados, necesita como parametro el texto del todo, este será el identificador de busqueda
  const completeTodos = (text) => {
    //en todoIndex quedará guardada la posición (indice) del todo que contenga el mismo texto que ingresa como parametro en al función
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    //nuevo arreglo con el todos desestructurado
    const newTodos = [...todos];

    //Se modifica la propiedad completed a "true" con el indice encontrado
    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    };

    //Se actualiza el todos principal
    saveTodosLocalStorage(newTodos);
  };

  //funcion todos eliminar, similar a completados
  const deleteTodos = (text) => {
    //en todoIndex quedará guardada la posición (indice) del todo que contenga el mismo texto que ingresa como parametro en al función
    const todoIndex = todos.findIndex((todo) => todo.text === text);


      //nuevo arreglo con el todos desestructurado
      const newTodos = [...todos];

      //Se modifica la propiedad completed a "true" con el indice encontrado
      newTodos.splice([todoIndex], 1);
      console.log("eliminar");

      //Se actualiza el todos principal
      saveTodosLocalStorage(newTodos);
 
  };

  //se envían todas las props necesarias
  return (
    <>
       
   
      <AppUi
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodos={completeTodos}
        deleteTodos={deleteTodos}
      />
    </>
  );
}

export default App;
