import './App.css';
import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "Learn Java",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn JS",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn PHP",
            isCompleted: false
        }
    ])
    return (
        <div className="App">
            <TodoForm onAdd={(text) => {
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        text,
                        isCompleted: false
                    }
                ])
            }}/>
            <TodoList todos={todos}
                      onChange={(newTodo) => {
                          console.log(newTodo, "new todo");
                          setTodos(todos.map(todo => {
                              if (todo.id === newTodo.id) {
                                  return newTodo;
                              }
                              return todo;
                          }));
                      }}
                      onDelete={(todo) => {
                          setTodos(todos.filter(t => t.id !== todo.id));
                      }}/>
            <TodoFooter todos={todos} onClearCompleted={() => {
                setTodos(todos.filter(todo => !todo.isCompleted));
            }}/>
        </div>
    );
}

export default App;
