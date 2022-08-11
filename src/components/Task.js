import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { TaskStyle } from './styles/App.styled'
import PropTypes from 'prop-types'


const Task = ({task}) => {
  const {reminder, id, day, text} = task
  const {deleteTask, toggleReminder } = useGlobalContext()
  return (
    <TaskStyle border = {reminder ? true : false}
      onDoubleClick={() => toggleReminder(id)}
    >
      <h3>
        <span>{text}</span>
        <FaTimes onClick={() => deleteTask(id)}
        />
      </h3>
      <p>{day}</p>
    </TaskStyle>
  )
}

Task.propTypes = {
  task: PropTypes.object
}



export default Task
