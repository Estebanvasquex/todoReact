import React from 'react'
import './createTodoButton.css'



export default function CreateTodoButton() {
  const onClickButton = (msg)=>{
    alert(msg);
  }
  return (
    <>
        <button className='createTodoButon__boton' onClick={()=>{
          onClickButton("Esto será un modal")
        }}>+</button>
    </>
  )
}
