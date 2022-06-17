import { createContext, useReducer, useContext } from "react";

const todoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "EDIT_TODO":
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                } else {
                    return todo;
                }
            });
        case "COMPLETE_TODO":
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        isDone: true
                    };
                } else {
                    return todo;
                }
            });
        case "UNCOMPLETE_TODO":
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        isDone: false
                    };
                } else {
                    return todo;
                }
            });
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}

const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <todoContext.Provider value={{ todos, dispatch }}>
            {children}
        </todoContext.Provider>
    );
}

const useTodo = () => {
    const context = useContext(todoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}

export { TodoProvider, useTodo };