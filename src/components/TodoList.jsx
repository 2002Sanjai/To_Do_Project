import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

// The component receives all data and functions as props from App.jsx
function TodoList({ 
  todos, 
  filter, 
  setFilter, 
  toggleTodo, 
  deleteTodo, 
  editTodo, 
  deleteDoneTasks, 
  deleteAllTasks 
}) {

  const handleEditClick = (id, currentText) => {
    // Simple prompt for editing text
    const newText = window.prompt("Edit task:", currentText);
    if (newText !== null) {
      editTodo(id, newText);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">TodoList</h2>
      
      {/* Filters */}
      <div className="flex justify-between gap-4 mb-8">
        {/* We map over an array of filter names to create the buttons dynamically */}
        {['All', 'Done', 'Todo'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-2 rounded transition-colors duration-200 text-white ${
              filter === f ? 'bg-[#138496] border-2 border-teal-800 font-bold' : 'bg-[#17a2b8] hover:bg-[#138496]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3 mb-8">
        {todos.length === 0 && (
          <p className="text-center text-gray-500 py-4">No tasks found.</p>
        )}
        
        {/* We map over the 'todos' array passed from App.jsx */}
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between items-center border border-gray-200 p-3 rounded bg-white">
            
            {/* Dynamic Styling based on completed status */}
            <span className={todo.completed ? "text-[#dc3545] line-through" : "text-gray-800"}>
              {todo.text}
            </span>
            
            <div className="flex items-center gap-3">
              {/* Toggle Checkbox */}
              {todo.completed ? (
                <FaCheckSquare 
                  onClick={() => toggleTodo(todo.id)} 
                  className="text-green-500 cursor-pointer text-lg hover:opacity-80" 
                />
              ) : (
                <FaRegSquare 
                  onClick={() => toggleTodo(todo.id)} 
                  className="text-gray-500 cursor-pointer text-lg hover:opacity-80" 
                />
              )}
              
              {/* Edit Button */}
              <FaPen 
                onClick={() => handleEditClick(todo.id, todo.text)}
                className="text-yellow-500 cursor-pointer text-lg hover:opacity-80" 
              />
              
              {/* Delete Button */}
              <FaTrashAlt 
                onClick={() => deleteTodo(todo.id)}
                className="text-[#dc3545] cursor-pointer text-lg hover:opacity-80" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4">
        <button 
          onClick={deleteDoneTasks}
          className="flex-1 bg-[#dc3545] hover:bg-[#c82333] text-white py-2 rounded transition-colors duration-200"
        >
          Delete done tasks
        </button>
        <button 
          onClick={deleteAllTasks}
          className="flex-1 bg-[#dc3545] hover:bg-[#c82333] text-white py-2 rounded transition-colors duration-200"
        >
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

export default TodoList;
