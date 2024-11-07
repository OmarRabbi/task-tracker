import React from 'react';
import Column from './Column';
import tasksData from '../data/tasksData';

function TaskBoard() {
  return (
    <div className="flex overflow-x-auto space-x-2 p-4 scrollbar-[2rem] scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200">
      <Column title="Incomplete" tasks={tasksData.incomplete} color="bg-red-600" />
      <Column title="To Do" tasks={tasksData.todo} color="bg-blue-400" />
      <Column title="Doing" tasks={tasksData.doing} color="bg-yellow-400" />
      <Column title="Under Review" tasks={tasksData.underReview} color="null" />
      <Column title="Completed" tasks={tasksData.completed} color="null" />
      <Column title="Overdue" tasks={tasksData.overdue} color="null" />
    </div>
  );
}

export default TaskBoard;
