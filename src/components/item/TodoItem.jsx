import React from "react";
import "./todoItem.css";

export function TodoItem(props) {
  return (
    <>
      <li>
        <span
          className={`icon icon-check ${
            props.completed && "icon-check--active"
          }`}
        >
          ✓
        </span>
        <p>{props.text}</p>
        <span
          className={`icon icon-delete ${
            props.completed && "icon-delete--complete"
          }`}
        >
          X
        </span>
      </li>
    </>
  );
}
