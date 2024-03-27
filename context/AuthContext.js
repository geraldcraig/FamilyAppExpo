import { createContext, useEffect, useReducer } from "react";
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null)

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY':
            return { user: action.payload, authIsReady: true }
        default:
            return state
    }
}

export const ChatContext = createContext(null);

export const chatReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CHAT':
            return { ...state, chats: [...state.chats, action.payload] }
        case 'REMOVE_CHAT':
            return { ...state, chats: state.chats.filter(chat => chat.id !== action.payload) }
        default:
            return state
    }
}

export const ChatContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, {
        chats: []
    })

    console.log('ChatContext state:', state)

    return (
        <ChatContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ChatContext.Provider>
    )
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch({ type: 'AUTH_IS_READY', payload: user })
            unsub()
        })
    }, [])

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}