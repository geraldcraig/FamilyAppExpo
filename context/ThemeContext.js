import { createContext, useReducer } from "react";

export const ThemeContext = createContext(null);

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload };
        case 'CHANGE_FIRST':
            return { ...state, first: action.payload };
        case 'CHANGE_LAST':
            return { ...state, last: action.payload };
        case 'CHANGE_MAIL':
            return { ...state, mail: action.payload };
        default:
            return state;
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
            color: 'red',
            first: "David",
            last: "Jones",
            mail: "david@jones.com",
        })

        const changeColor = (color) => {
            dispatch({ type: 'CHANGE_COLOR', payload: color });
        }

        const changeFirst = (first) => {
            dispatch({ type: 'CHANGE_FIRST', payload: first });
        }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeFirst }}>
            {children}
        </ThemeContext.Provider>
    );
}
