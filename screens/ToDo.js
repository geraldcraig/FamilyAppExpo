import { View, Text, TextInput, Button } from 'react-native';
import React, { createContext, useReducer, useContext, useState } from 'react';


// Create the initial state
const initialState = {
    todos: [],
};

// Create the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

// Create the context
const TodoContext = createContext();

// Create the TodoProvider component
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = todo => {
        dispatch({ type: 'ADD_TODO', payload: todo });
    };

    const removeTodo = id => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    return (
        <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

// Create the TodoApp component
const TodoApp = () => {
    const { todos, addTodo, removeTodo } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const todo = {
                id: Date.now(),
                text: newTodo,
            };
            addTodo(todo);
            setNewTodo('');
        }
    };

    const handleRemoveTodo = id => {
        removeTodo(id);
    };

    return (
        <View>
            <TextInput
                value={newTodo}
                onChangeText={text => setNewTodo(text)}
                placeholder="Enter a new todo"
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
            {todos.map(todo => (
                <View key={todo.id}>
                    <Text>{todo.text}</Text>
                    <Button title="Remove" onPress={() => handleRemoveTodo(todo.id)} />
                </View>
            ))}
        </View>
    );
};
