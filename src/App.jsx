import "./App.css";

import { TodoCounter } from "./components/counter/TodoCounter";
import { TodoItem } from "./components/item/TodoItem";
import { TodoSearch } from "./components/search/TodoSearch";
import { TodoList } from "./components/list/TodoList";
import CreateTodoButton from "./components/button/CreateTodoButton";

const todos = [
  { text: "Aprendiendo React", completed: false },
  { text: "Jugar con los niños", completed: false },
  { text: "Leer mi libro de la semana", completed: false },
  { text: "Jugar futbol", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed = {todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
