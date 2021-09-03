import { createReducer, on } from "@ngrx/store";
import { addTodo, checkTodo, clearTodos, selectAllTodos, selectCompletedTodos, selectUncompletedTodos } from "../actions/todoActions";
import Todo from "../interfaces/Todo";

interface Todos {
    allTodos: Todo[],
    shownTodos: Todo[]
}

const savedTodos = JSON.parse(localStorage.getItem("jacobs.todos") || "[]")

export const initialTodos: Todos = {
    allTodos: savedTodos,
    shownTodos: savedTodos,
}

const save = (newTodos: Todo[]) => localStorage.setItem("jacobs.todos", JSON.stringify(newTodos))

const todoReducer = createReducer(
    initialTodos,
    on(addTodo, (state, action) => { 
        const newTodos = [...state.allTodos, action.payload]
        save(newTodos)
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
        save(newTodos)
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
        save(newTodos)
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