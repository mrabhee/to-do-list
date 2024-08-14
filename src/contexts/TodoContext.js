import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Task 1',
        },
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider