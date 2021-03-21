import React from 'react'

function Todo(props) {
    console.log(props)

    return (
        <div className="todo">
            {
                props.status 
                ? 
                <li className="todo-item">
                    <strike>
                        {props.value}
                    </strike>
                </li>
                :
                <>
                    <li className="todo-item">
                        {props.value}
                    </li>
                    <button className='complete-btn' onClick={() => props.completeTask()}><i className="fas fa-check" ></i></button>
                </>
            }
            
            
            <button className='trash-btn' onClick={() => props.deleteTask()}><i className="fas fa-trash" ></i></button>
        </div>
    )
}

export default Todo
