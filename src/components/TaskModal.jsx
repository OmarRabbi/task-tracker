import React, { useState } from "react";
import axios from "axios";

function TaskModal({ task, onClose }) {
  const [attachments, setAttachments] = useState(task.attachments || []);
  const [uploadedFileCount, setUploadedFileCount] = useState(attachments.length);
  const handleFileChange = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }
    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      const newFiles = response.data.files;
      setAttachments((prev) => [...prev, ...newFiles]);
      setUploadedFileCount((prevCount) => prevCount + newFiles.length);
      task.attachments = [...(task.attachments || []), ...newFiles];
    } catch (error) {
      console.error("File upload failed", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="text-gray-500 float-right">Close</button>
        <h3 className="text-xl font-bold mb-4">{task.clientName}</h3>
        <p>{task.description}</p>
        {/* File Upload */}
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <div className="attachments-count mt-4">
          {uploadedFileCount > 0 ? (
            <p>{uploadedFileCount} file{uploadedFileCount > 1 ? "s" : ""} uploaded</p>
          ) : (
            <p className="text-gray-500">No files uploaded.</p>
          )}
        </div>
        <div className="attachments-list mt-4">
          {attachments.length > 0 && (
            <ul>
              {attachments.map((file, index) => (
                <li key={index}>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
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
