import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useGlobalContext } from './context'
import GlobalStyles from './components/styles/GlobalStylyes.styled'
import {Container} from './components/styles/App.styled'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'


const App = () => {
  const {showAddForm, tasks} = useGlobalContext();
  
  return (
    <Router>
      <GlobalStyles/>
      <Container>
        <Header/>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddForm && <AddTask />}
                {tasks.length > 0 ? (
                  <Tasks/>
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  )
}

export default App
