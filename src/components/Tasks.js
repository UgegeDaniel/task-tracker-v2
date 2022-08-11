import React from 'react';
import { useGlobalContext } from '../context'
import Task from './Task'

const Tasks = () => {
  const { tasks } = useGlobalContext();
  return (
    <>
      {tasks.map((task, id) => (
        <Task key={id} task={task}  />
        ))}
    </>
  )
}

export default Tasks
