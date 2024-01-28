import React from 'react';

import {Feather, FontAwesome} from '@expo/vector-icons';
import {Button, StyleSheet, Text, View} from "react-native";

// const SignUpScreen = props => {
function SignUpScreen({navigation}) {

    return (
        <>
            <View style={styles.container}>
                <Text>SignUp Screen</Text>
                <Button title='Go to login screen' onPress={() => navigation.navigate("Login")}/>
                <Button title='Go to chat screen' onPress={() => navigation.navigate("Chat Screen")}/>
                <Button title='Go to signup screen' onPress={() => navigation.navigate("Signup")}/>
                <Button title="Go to Details" onPress={() => navigation.goBack()}/>
                {/*<Input*/}
                {/*    label="First name"*/}
                {/*    icon="user-o"*/}
                {/*    iconPack={FontAwesome} />*/}

                {/*<Input*/}
                {/*    label="Last name"*/}
                {/*    icon="user-o"*/}
                {/*    iconPack={FontAwesome} />*/}

                {/*<Input*/}
                {/*    label="Email"*/}
                {/*    icon="mail"*/}
                {/*    iconPack={Feather} />*/}

                {/*<Input*/}
                {/*    label="Password"*/}
                {/*    icon="lock"*/}
                {/*    iconPack={Feather} />*/}

                {/*<SubmitButton*/}
                {/*    title="Sign up"*/}
                {/*    onPress={() => console.log("Button pressed")}*/}
                {/*    style={{ marginTop: 20 }}/>*/}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignUpScreen;