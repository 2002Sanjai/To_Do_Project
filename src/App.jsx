import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  // 1. STATE: Store the list of to-dos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn ReactJS basics", completed: true },
    { id: 2, text: "Practice ReactJS", completed: false },
    { id: 3, text: "Learn Redux", completed: false },
    { id: 4, text: "Code portfolio in React", completed: false },
    { id: 5, text: "Learn React Native", completed: false }
  ]);
  
  // 2. STATE: Store the current filter
  const [filter, setFilter] = useState('All'); // Can be 'All', 'Done', or 'Todo'

  // HANDLERS: Functions to modify the state
  const addTodo = (text) => {
    if (!text.trim()) return; // Prevent empty tasks
    const newTodo = {
      id: Date.now(), // Generate a unique ID
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setFilter('All'); // Automatically switch to 'All' tab to see the new task
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const deleteDoneTasks = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const deleteAllTasks = () => {
    setTodos([]);
  };

  // Derived state: Filter the todos based on the active filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'Done') return todo.completed;
    if (filter === 'Todo') return !todo.completed;
    return true; // 'All'
  });

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      {/* Pass the addTodo function as a prop to TodoInput */}
      <TodoInput addTodo={addTodo} />
      
      {/* Pass all necessary data and functions as props to TodoList */}
      <TodoList 
        todos={filteredTodos} 
        filter={filter}
        setFilter={setFilter}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        deleteDoneTasks={deleteDoneTasks}
        deleteAllTasks={deleteAllTasks}
      />
    </div>
  );
}

export default App;
