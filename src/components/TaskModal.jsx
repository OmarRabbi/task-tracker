import React, { useState } from "react";

function TaskModal({ task, onClose }) {
  const [attachments, setAttachments] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setAttachments((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setAttachments((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="text-gray-500 float-right">Close</button>
        
        <h3 className="text-xl font-bold mb-4">{task.clientName}</h3>
        <p>{task.description}</p>
        
        {/* Attachment Upload Section */}
        <div className="mt-4">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>

        {/* Attachment List */}
        <div className="attachments-list mt-4">
          {attachments.length > 0 ? (
            <ul>
              {attachments.map((file, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No files uploaded.</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="bg-gray-500 text-white p-2 mt-4 w-full rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
