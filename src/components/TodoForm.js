import React, { useState } from 'react'
import fr from '../components/Style/Form.module.css'
import { useTodo } from '../contexts'
const TodoForm = () => {
    //creating state for user input 
    const [todo, setTodo] = useState('')

    //Adding todo in list
    const { addTodo } = useTodo()

    //Handle button click
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo })
        setTodo('')
    }


    return (
        <div>
            <form className={fr.form} onSubmit={handleSubmit}>
                <input
                    className={fr.inp}
                    placeholder='Create your Task'
                    value={todo}
                    onChange={(e) => { setTodo(e.target.value) }}
                />
                <button
                    className={fr.btn}
                    type='submit'
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm