import React, {useState} from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from '../constants/colors';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import PageContainer from "./PageContainer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

const Input = props => {
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>

        <View style={styles.inputContainer}>
            {
                props.icon && <props.iconPack
                    name={props.icon}
                    size={props.iconSize || 15 }
                    style={styles.icon} />
            }
            <TextInput
                style={styles.input}/>
        </View>
        {
            props.errorText &&
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.errorText}</Text>
            </View>
        }
    </View>
};

const SubmitButton = props => {

    const enabledBgColor = props.color || colors.primary;
    const disabledBgColor = colors.lightGrey;
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

    return <TouchableOpacity
        onPress={props.disabled ? () => {} : props.onPress}
        style={{
            ...styles.button,
            ...props.style,
            ...{ backgroundColor: bgColor }}}>
        <Text style={{ color: props.disabled ? colors.grey : 'white' }}>
            { props.title }
        </Text>
    </TouchableOpacity>
};

const SignInForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('User registered successfully:', userCredential.user.uid);
            // You can add additional logic here, such as navigating to another screen
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
        console.log('Signup:', { email, password });
    };
    return (
        <>
            <Input
                label="Email"
                onChangeText={setEmail}
                value={email}
                icon="mail"
                iconPack={Feather} />

            <Input
                label="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                icon="lock"
                iconPack={Feather} />

            {/*<SubmitButton*/}
            {/*    title="Sign up"*/}
            {/*    onPress={() => console.log("Button pressed")}*/}
            {/*    style={{ marginTop: 20 }}/>*/}
            <Button title="Sign Up" onPress={handleSignup} />
        </>
    )

};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%'
    },
    label: {
        marginVertical: 8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: "#1c1e21"
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: "#F4F8F7",
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
        color: "#7f8c8d"
    },
    input: {
        color: "#1c1e21",
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        paddingTop: 0
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3
    },
    linkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    link: {
        color: colors.blue,
        fontFamily: 'medium',
        letterSpacing: 0.3
    }
});

export default SignInForm;