import React from 'react'

import './todoList.css'

//Lo que hace es traer el componente hijo que se le agrego en el AppUi por medio de props prosps.children
export function TodoList(props) {
  return (
    <>
    <section className='todoList__render'>
        <ul className='todo
        '>
            {props.children}
        </ul>
    </section>
        </>
  )
}
