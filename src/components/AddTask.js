import { useState } from 'react'
import { useGlobalContext } from '../context'
import Button from './Button'
import { FormStyle } from './styles/Form.styled'
import Input from './Input'

const AddTask = () => {
  const {addTask} = useGlobalContext()

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
 
    if (!text) {
      alert('Please add a task')
      return
    }
    const newId = new Date().getTime().toString();
    addTask({id:newId, text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input
          title='Task'
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        >
      </Input>
      <Input
          title='Day and Time'
          type='text'
          placeholder='Add Task'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
      </Input>
      <Input
          title='Set Reminder'
          type='checkbox'
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        >
      </Input>

      <Button
        onClick={handleSubmit} 
        width={'100%'}
        text={'Add new Task'}
      />
    </FormStyle>
  )
}

export default AddTask
