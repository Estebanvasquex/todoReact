import React from 'react'
import './todoCounter.css'

/*   */

export function TodoCounter({totalTodos, completedTodos}) {
  return (
    <><h1 className='todoCounter--texto'>{`Has completado ${completedTodos.length} de  ${totalTodos } Todos`}</h1> </>
  )
}

