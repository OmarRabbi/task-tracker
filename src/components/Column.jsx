import React from 'react';
import TaskCard from './TaskCard';

function Column({ title, tasks, color }) {
  return (
    <div className="flex flex-col bg-gray-100 rounded-md">
      {/* Header with Color Indicator and Task Count */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className={`w-6 h-6 rounded-l-2xl ${color} mr-2`} aria-hidden="true"></div>
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <span className="text-sm font-semibold text-gray-600 rounded-sm px-3 py-2 bg-gray-200">{tasks.length}</span>
      </div>
      {/* Task List */}
      <div className="overflow-y-auto max-h-[calc(100vh-100px)] p-2 space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
