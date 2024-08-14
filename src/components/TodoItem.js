import React, { useState } from 'react'
import it from './Style/Item.module.css'
import { useTodo } from '../contexts'

const TodoItem = ({ todo }) => {

    //import usetodo hook for delete button
    const { deleteTodo } = useTodo()

    return (
        <div className={it.item}>
            <p className={it.para}>{todo.todo}</p>
            <button className={it.btn} onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default TodoItem