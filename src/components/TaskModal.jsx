import React from 'react';

function TaskModal({ task, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="text-gray-500 float-right">Close</button>
        
        <h3 className="text-xl font-bold mb-4">{task.clientName}</h3>
        
        <p>{task.description}</p>
        
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default TaskModal;
