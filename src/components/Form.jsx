import React, {useState} from 'react'
import Filter from './Filter'

function Form(props) {

    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(input)
        props.addTask(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    className="todo-input" 
                    placeholder="Task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <Filter setFilter={props.setFilter} />
            </form>
        </div>
    )
}

export default Form
