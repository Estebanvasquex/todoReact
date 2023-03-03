import React, { useState } from "react";
import "./todoSearch.css";

export function TodoSearch({searchValue, setSearchValue}) {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <input
        className="todoSearch__input"
        type="text"
        name=""
        id=""
        placeholder="Ingresa texto"
        onChange={onSearchValueChange}
        
      />
      
    </>
  );
}
