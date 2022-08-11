import React, {useReducer, useContext, useEffect} from 'react'
import {reducer} from './reducer'
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const getLocalStorage = () => {
        let tasks = localStorage.getItem('tasks')
        if(tasks){
            return JSON.parse(localStorage.getItem('tasks'))
        }else{
            return []; 
        }
    }

    const initialState = {
        tasks: getLocalStorage(),
        showAddForm: false,
    }



//set up 
    const [state, dispatch] = useReducer(reducer, initialState); 

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },[state.tasks])


    const toggleForm = () => {
        dispatch({type: 'SHOW_ADD_FORM'})
    }

    const addTask = (task) => {
        dispatch({type: 'ADD_NEW_TASK', payload:task})
    }

    const deleteTask = (id) => {
        dispatch({type: 'DELETE_TASK', payload:id})
    }

    const toggleReminder = (id) => {
        dispatch({type: 'TOGGLE_REMINDER', payload:id})
    }

    return( 
        <AppContext.Provider value={{
            ...state,
            toggleForm,
            addTask,
            deleteTask,
            toggleReminder
        }}>{children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
