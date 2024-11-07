import React, { useState } from "react";
import TaskModal from "./TaskModal";
import { FaComments, FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { TbBrandDatabricks } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

function TaskCard({ task }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal for attachments
  const handleAttachmentClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };
  const attachmentCount = task.attachments ? task.attachments.length : 0;
  return (
    <>
      <div className="bg-white p-2 rounded-md shadow-md cursor-pointer w-72 h-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CgProfile className="w-6 h-6 p-1 rounded-full bg-gray-200" />
            <span className="text-xs font-semibold">{task.clientName}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CgProfile className="w-6 h-6 p-1 rounded-full bg-gray-200" />
            <span className="text-xs font-semibold">{task.creatorName}</span>
          </div>
        </div>
        {/* Task Description */}
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center space-x-1">
            <TbBrandDatabricks />
            <span className="text-xs text-gray-600">
              {task.description.length > 30
                ? `${task.description.slice(0, 30)}...`
                : task.description}
            </span>
          </div>
          <div className="flex items-center space-x-1 p-1 rounded-md bg-gray-100">
            <MdAssignment />
            <span className="text-xs font-medium text-gray-500">
              {task.progress}
            </span>
          </div>
        </div>
        {/* Footer Section */}
        <div className="w-[100%] flex items-center justify-between mt-2">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <CgProfile className="w-6 h-6 p-1 rounded-full bg-gray-200" />
              <CgProfile className="w-6 h-6 p-1 rounded-full bg-gray-200" />
              <span className="text-[10px] font-semibold p-1 rounded-full bg-gray-200">
                {task.priority}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <FaComments className="w-3 h-3" />
              <span className="text-[10px] font-semibold">{task.comments}</span>
            </div>
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={handleAttachmentClick}
            >
              <FaPaperclip className="w-3 h-3" />
              <span className="text-[10px] font-semibold">
                {attachmentCount > 0
                  && `${attachmentCount}`}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCalendarAlt className="w-3 h-3" />
              <span className="text-[10px] font-semibold">{task.dueDate}</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <TaskModal task={task} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default TaskCard;
