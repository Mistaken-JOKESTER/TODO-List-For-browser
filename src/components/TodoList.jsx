import React from 'react'
import Todo from './Todo'

function TodoList({todos, deleteTask, completeTask}) {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        todos.map(todo => <Todo 
                            status={todo.status}
                            value={todo.value} 
                            key={todo._id} 
                            deleteTask={() => deleteTask(todo._id)} 
                            completeTask={() => completeTask(todo._id)} 
                        />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList
