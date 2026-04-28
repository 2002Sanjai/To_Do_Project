import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

function TodoList() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">TodoList</h2>
      
      {/* Filters */}
      <div className="flex justify-between gap-4 mb-8">
        <button className="flex-1 bg-[#17a2b8] hover:bg-[#138496] text-white py-2 rounded transition-colors duration-200">
          All
        </button>
        <button className="flex-1 bg-[#17a2b8] hover:bg-[#138496] text-white py-2 rounded transition-colors duration-200">
          Done
        </button>
        <button className="flex-1 bg-[#17a2b8] hover:bg-[#138496] text-white py-2 rounded transition-colors duration-200">
          Todo
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3 mb-8">
        {/* Completed Task */}
        <div className="flex justify-between items-center border border-gray-200 p-3 rounded bg-white">
          <span className="text-[#dc3545] line-through">Learn ReactJS basics</span>
          <div className="flex items-center gap-3">
            <FaCheckSquare className="text-green-500 cursor-pointer text-lg" />
            <FaPen className="text-yellow-500 cursor-pointer text-lg" />
            <FaTrashAlt className="text-[#dc3545] cursor-pointer text-lg" />
          </div>
        </div>

        {/* Pending Tasks */}
        {[
          "Practice ReactJS",
          "Learn Redux",
          "Code portfolio in React",
          "Learn React Native"
        ].map((task, idx) => (
          <div key={idx} className="flex justify-between items-center border border-gray-200 p-3 rounded bg-white">
            <span className="text-gray-800">{task}</span>
            <div className="flex items-center gap-3">
              <FaRegSquare className="text-gray-500 cursor-pointer text-lg" />
              <FaPen className="text-yellow-500 cursor-pointer text-lg" />
              <FaTrashAlt className="text-[#dc3545] cursor-pointer text-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4">
        <button className="flex-1 bg-[#dc3545] hover:bg-[#c82333] text-white py-2 rounded transition-colors duration-200">
          Delete done tasks
        </button>
        <button className="flex-1 bg-[#dc3545] hover:bg-[#c82333] text-white py-2 rounded transition-colors duration-200">
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

export default TodoList;
