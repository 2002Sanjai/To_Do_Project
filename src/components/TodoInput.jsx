import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa';

// The component receives the 'addTodo' function as a prop
function TodoInput({ addTodo }) {
  // Local state to track what the user is typing
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the browser from refreshing the page
    addTodo(inputText); // Call the function passed from App.jsx
    setInputText('');   // Clear the input box after submitting
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">TodoInput</h2>
      
      {/* We use a <form> so the user can press 'Enter' to submit */}
      <form onSubmit={handleSubmit} className="border border-gray-200 p-6 rounded shadow-sm bg-white">
        <div className="flex border border-gray-300 rounded mb-4 overflow-hidden">
          <div className="bg-[#17a2b8] text-white p-3 flex items-center justify-center min-w-[40px]">
            <FaBook />
          </div>
          <input 
            type="text" 
            placeholder="New Todo" 
            className="flex-1 p-2 outline-none"
            value={inputText} // The input value is tied to state
            onChange={(e) => setInputText(e.target.value)} // Update state on every keystroke
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#17a2b8] hover:bg-[#138496] text-white py-2 rounded transition-colors duration-200"
        >
          Add new task
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
