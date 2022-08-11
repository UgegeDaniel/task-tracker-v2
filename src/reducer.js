export const reducer = (state, action) => {

    if (action.type === 'SHOW_ADD_FORM') {
        return {
            ...state,
            showAddForm: !(state.showAddForm)
        }
    }

    if (action.type === 'ADD_NEW_TASK') {
        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    }


    if (action.type === 'DELETE_TASK') {

        return {
            ...state,
            tasks: (state.tasks.filter((task) => task.id !== action.payload)),
        }
    }

    if (action.type === 'TOGGLE_REMINDER') {
        let modTasks = state.tasks.map((task) => {
            if (task.id === action.payload) {
                return {
                    ...task,
                    reminder: !(task.reminder)
                }
            }
            return task
        })
        return {
            ...state,
            tasks: modTasks
        }
    }


    return state //always return state 
}
