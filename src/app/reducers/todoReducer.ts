import { createReducer, on } from "@ngrx/store";
import { addTodo, checkTodo, clearTodos, selectAllTodos, selectCompletedTodos, selectUncomlpetedTodos } from "../actions/todoActions";
import Todo from "../interfaces/Todo";

interface Todos {
    allTodos: Todo[],
    shownTodos: Todo[]
}

export const initialTodos: Todos = {
    allTodos: [],
    shownTodos: []
}

const _themeReducer = createReducer(
    initialTodos,
    on(addTodo, (state, action) => ({ 
        ...state, 
        allTodos: [...state.allTodos, action]
    })),
    on(checkTodo, (state, action) => ({ 
        ...state, 
        allTodos: state.allTodos.map(t => 
            t.id === action ? { ...t, completed: !t.completed} : t
        )    
    }))
)

export default _themeReducer; 