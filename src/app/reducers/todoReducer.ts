import { createReducer, on } from "@ngrx/store";
import { addTodo, checkTodo, clearTodos, selectAllTodos, selectCompletedTodos, selectUncompletedTodos } from "../actions/todoActions";
import Todo from "../interfaces/Todo";

interface Todos {
    allTodos: Todo[],
    shownTodos: Todo[]
}

export const initialTodos: Todos = {
    allTodos: JSON.parse(localStorage.getItem("jacobs.todos") || "[]"),
    shownTodos: JSON.parse(localStorage.getItem("jacobs.todos") || "[]"),
}

const todoReducer = createReducer(
    initialTodos,
    on(addTodo, (state, action) => { 
        const newTodos = [...state.allTodos, action.payload]
        localStorage.setItem("jacobs.todos", JSON.stringify(newTodos))
        return {
            ...state, 
            allTodos: newTodos,
            shownTodos: newTodos,
        }
    }),
    on(checkTodo, (state, action) => {
        const newTodos = state.allTodos.map(t => 
            t.id === action.payload ? { ...t, completed: !t.completed} : t
        )
        localStorage.setItem("jacobs.todos", JSON.stringify(newTodos))
        return {
            ...state, 
            allTodos: newTodos, 
            shownTodos: newTodos    
        } 
    }),
    on(clearTodos, (state) => {
        const newTodos = state.allTodos.filter(t => 
            !t.completed
        )
        localStorage.setItem("jacobs.todos", JSON.stringify(newTodos))
        return {
            ...state, 
            allTodos: newTodos,
            shownTodos: newTodos
        } 
    }),
    on(selectAllTodos, (state) => ({ 
        ...state, 
        shownTodos: state.allTodos
    })),
    on(selectCompletedTodos, (state) => ({ 
        ...state, 
        shownTodos: state.allTodos.filter(t =>
            !t.completed  
        )
    })),
    on(selectUncompletedTodos, (state) => ({ 
        ...state, 
        shownTodos: state.allTodos.filter(t =>
            t.completed    
        )
    })),
)

export default todoReducer; 