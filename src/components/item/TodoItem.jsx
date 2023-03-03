import React from "react";
import "./todoItem.css";
import logo from "../../img/x-circle.svg";

export function TodoItem(props) {
  const onComplete = () => {
    alert("Se completó el todo");
  };

  //Todo individual
  const onDelete = () => {
  };

  return (
    <>
      <li>
        <span
          className={`icon icon-check ${
            props.completed && "icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          ✓
        </span>
        <p className={`${props.completed && "textTachado"}`}>{props.text}</p>

        <img
          className={`icon icon-delete ${
            props.completed && "icon-delete--complete"
          }`}
          onClick={props.onDelete}
          src={logo}
          alt=""
        />
      </li>
    </>
  );
}
