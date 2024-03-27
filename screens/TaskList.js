import React, { useState } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { useTasks, useTasksDispatch } from '../context/TasksContext';

export default function TaskList() {
    const tasks = useTasks();
    const dispatch = useTasksDispatch();

    return (
        <View style={styles.ul}>
            {tasks.map(task => (
                <Task key={task.id} task={task} dispatch={dispatch} />
            ))}
        </View>
    );
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    

    const handleTextChange = newText => {
        dispatch({
            type: 'changed',
            task: {
                ...task,
                text: newText
            }
        });
    };

    const handleToggleDone = () => {
        dispatch({
            type: 'changed',
            task: {
                ...task,
                done: !task.done
            }
        });
    };

    const handleDelete = () => {
        dispatch({
            type: 'deleted',
            id: task.id
        });
    };

    return (
        <View >
            <TouchableOpacity onPress={handleToggleDone}>
                <Text>{task.done ? '✓' : '◻'}</Text>
            </TouchableOpacity>
            {isEditing ? (
                <View>
                    <TextInput
                        style={styles.input}
                        value={task.text}
                        onChangeText={handleTextChange}
                        autoFocus
                    />
                    <Button title="Save" onPress={() => setIsEditing(false)} />
                </View>
            ) : (
                <View>
                    <Text>{task.text}</Text>
                    <Button title="Edit" onPress={() => setIsEditing(true)} />
                </View>
            )}
            <Button title="Delete" onPress={handleDelete} />
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
