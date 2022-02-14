import React, { useState } from 'react'; 


function Todolist() {

    const[todo, setTodo] = useState({
        description: '', 
        date: ''
    }); 

    const[todos, setTodos] = useState([]); 

    const addTodo = () => {
        setTodos([...todos, todo])
    }
   

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    return(
        <div>
            <h1>Simple todo list</h1>
            <input
            placeholder='Description'
            name='description'
            value={todo.description}
            onChange={inputChanged} />

            <input
            placeholder='Date'
            name='date'
            type="date"
            value={todo.date}
            onChange={inputChanged}
             />
            <button onClick={addTodo}>Add</button>
            <table>
                <thead>
                    <tr>
                        <td><b>Date</b></td>
                        <td><b>Description</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                            </tr>  
                            )
                    }
                </tbody>
            </table>
        </div>
    ); 
}

export default Todolist;