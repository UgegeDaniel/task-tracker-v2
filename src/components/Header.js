import { useLocation } from 'react-router-dom'
import {useGlobalContext} from '../context'
import {HeaderStyle} from './styles/App.styled.js'
import Button from './Button'

const Header = () => {
  const {toggleForm, showAddForm} = useGlobalContext();
  const location = useLocation()

  return (
    <HeaderStyle>
      <h1>Task Tracker</h1>
      {location.pathname === '/' && 
      (
        <Button 
        onClick={toggleForm} 
        bg={showAddForm ? 'red ' : 'green'
      }
      text={showAddForm ? 'close' : 'Add a Task'}
      />
      )
      }
    </HeaderStyle>
  )
}

export default Header
