import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useTasksDispatch } from '../context/TasksContext';

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

    const handleAddTask = () => {
        if (text.trim() === '') return;

        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });

        setText('');
    };

    let nextId = 3; // Moved inside the component to maintain its scope

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add task"
                value={text}
                onChangeText={setText}
            />
            <Button style={styles.button} title="Add" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'sans-serif',
        margin: 20,
        padding: 0,
    },
    h1: {
        marginTop: 0,
        fontSize: 22,
    },
    h2: {
        marginTop: 0,
        fontSize: 20,
    },
    h3: {
        marginTop: 0,
        fontSize: 18,
    },
    h4: {
        marginTop: 0,
        fontSize: 16,
    },
    h5: {
        marginTop: 0,
        fontSize: 14,
    },
    h6: {
        marginTop: 0,
        fontSize: 12,
    },
    code: {
        fontSize: 18,
    },
    ul: {
        paddingLeft: 20,
    },
    button: {
        margin: 5,
    },
    li: {
        listStyleType: 'none',
    },
});

