import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
