import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from "react-native";

const TextInputExample = () => {
    const [text, onChangeText] = useState('Text');
const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="placeholder"
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});

export default TextInputExample;