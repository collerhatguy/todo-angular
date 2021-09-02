import { createReducer, on } from "@ngrx/store";
import { addTodo, checkTodo, clearTodos, selectAllTodos, selectCompletedTodos, selectUncompletedTodos } from "../actions/todoActions";
import Todo from "../interfaces/Todo";

interface Todos {
    allTodos: Todo[],
    shownTodos: Todo[]
}

export const initialTodos: Todos = {
    allTodos: [],
    shownTodos: []
}

const _todoReducer = createReducer(
    initialTodos,
    on(addTodo, (state, action) => ({ 
        ...state, 
        allTodos: [...state.allTodos, action],
        shownTodos: [...state.allTodos, action],
    })),
    on(checkTodo, (state, action) => ({ 
        ...state, 
        allTodos: state.allTodos.map(t => 
            t.id === action ? { ...t, completed: !t.completed} : t
        ), 
        shownTodos: state.allTodos.map(t => 
            t.id === action ? { ...t, completed: !t.completed} : t
        )    
    })),
    on(clearTodos, (state) => ({ 
        ...state, 
        allTodos: state.allTodos.filter(t => 
            !t.completed
        ),
        shownTodos: state.allTodos.filter(t => 
            !t.completed
        ),
    })),
    on(selectAllTodos, (state) => ({ 
        ...state, 
        shownTodos: state.allTodos
    })),
    on(selectCompletedTodos, (state) => ({ 
        ...state, 
        shownTodos: state.allTodos.filter(t =>
            t.completed  
        )
    })),
    on(selectUncompletedTodos, (state) => ({ 
        ...state, 
        shownTodos: state.allTodos.filter(t =>
            !t.completed    
        )
    })),
)

export default _todoReducer; 