import React from 'react'

import './todoList.css'

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
