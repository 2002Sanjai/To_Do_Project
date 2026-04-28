import React from 'react';
import { FaBook } from 'react-icons/fa';

function TodoInput() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">TodoInput</h2>
      <div className="border border-gray-200 p-6 rounded shadow-sm bg-white">
        <div className="flex border border-gray-300 rounded mb-4 overflow-hidden">
          <div className="bg-[#17a2b8] text-white p-3 flex items-center justify-center min-w-[40px]">
            <FaBook />
          </div>
          <input 
            type="text" 
            placeholder="New Todo" 
            className="flex-1 p-2 outline-none"
          />
        </div>
        <button className="w-full bg-[#17a2b8] hover:bg-[#138496] text-white py-2 rounded transition-colors duration-200">
          Add new task
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
