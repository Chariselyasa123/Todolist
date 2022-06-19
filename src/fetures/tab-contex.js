import { createContext, useReducer, useContext } from "react";

const tabContext = createContext();

const tabReducer = (state, action) => {
    switch (action.type) {
        case "SET_TAB":
            return {
                ...state,
                tab: action.payload
            }
        case "TOGLE_TABS":
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}

const TabProvider = ({ children }) => {
    const [tab, dispatch] = useReducer(tabReducer, {
        tab: 'all',
        isOpen: false
    });

    return (
        <tabContext.Provider value={{ tab, dispatch }}>
            {children}
        </tabContext.Provider>
    );
}

const useTab = () => {
    const context = useContext(tabContext);
    if (!context) {
        throw new Error("useTodo must be used within a TabProvider");
    }
    return context;
}

export { TabProvider, useTab };