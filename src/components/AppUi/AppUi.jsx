import React from "react";

import { TodoCounter } from "../counter/TodoCounter.jsx";
import { TodoSearch } from "../search/TodoSearch.jsx";
import { TodoList } from "../list/TodoList.jsx";
import CreateTodoButton from "../button/CreateTodoButton.jsx";
import { TodoItem } from "../item/TodoItem";

export default function AppUi({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) {
  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
